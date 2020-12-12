const graphql = require("graphql");
const Employee = require("../models/employee");
const jwt = require("jsonwebtoken");
const NotificationType = require("./types/NotificationType");

const { GraphQLObjectType, GraphQLList } = graphql;

const NEW_NOTIFICATION = "new_notificaton";

const Subscription = new GraphQLObjectType({
  name: "Subscription",
  fields: {
    notifications: {
      type: new GraphQLList(NotificationType),
      resolve: async (payload, args, context, info) => {
        const adminAccessToken = context.cookies["admin-access-token"];

        const employee = await Employee.findById({
          _id: jwt.decode(adminAccessToken).id,
        });

        console.log("RUNNING");

        if (employee) {
          return employee.notifications;
        }
      },
      subscribe: (parent, args, { pubsub }, info) =>
        pubsub.asyncIterator(NEW_NOTIFICATION),
    },
  },
});

module.exports = Subscription;
