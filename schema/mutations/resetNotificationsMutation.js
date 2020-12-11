const EmployeeType = require("../types/EmployeeType");
const Employee = require("../../models/employee");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");

const NEW_NOTIFICATION = "new_notificaton";

const resetNotificationsMutation = {
  type: EmployeeType,
  async resolve(parent, args, { cookies, pubsub }) {
    const adminAccessToken = cookies["admin-access-token"];

    if (adminAccessToken) {
      const decodedAdminID = jwt.decode(adminAccessToken).id.toString();

      const currentEmployee = await Employee.findOne({
        _id: decodedAdminID,
      });

      let filter = { _id: decodedAdminID };

      const update = {
        notifications: currentEmployee.notifications.map((notification) => {
          notification.new = false;
          return notification;
        }),
      };

      const updatedEmployee = await Employee.findOneAndUpdate(filter, update, {
        new: true,
      });

      const updatedEmployeeRes = await updatedEmployee.save();

      if (pubsub) {
        console.log(pubsub);
        pubsub.publish(NEW_NOTIFICATION, update);
      }

      return {
        ...updatedEmployeeRes,
      };
    } else {
      throw new UserInputError("Admin is not authenticated.");
    }
  },
};

module.exports = resetNotificationsMutation;
