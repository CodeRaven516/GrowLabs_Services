import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ACTION_SELECTED_DAY from "../../../actions/SelectedDay/ACTION_SELECTED_DAY";
import ACTION_SELECT_TIME_ACTIVE from "../../../actions/SelectTimeActive/ACTION_SELECT_TIME_ACTIVE";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";
import "./Availability.css";

const Availability = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  const [numberOfWeeks, changeNumberOfWeeks] = useState(null);

  const selectedDay = useSelector(state => state.selectedDay.selectedDay);
  const selectTimeActive = useSelector(
    state => state.selectTimeActive.selectTimeActive
  );

  const monthsArr = [
    { Jan: "January" },
    { Feb: "February" },
    { Mar: "March" },
    { Apr: "April" },
    { May: "May" },
    { Jun: "June" },
    { Jul: "July" },
    { Aug: "August" },
    { Sep: "September" },
    { Oct: "October" },
    { Nov: "November" },
    { Dec: "December" }
  ];

  let reformattedDate = "";

  const formatDate = () => {
    if (selectedDay) {
      const dateString = selectedDay.toString().slice(4, 15);
      const monthThreeLetters = dateString.slice(0, 3);
      let monthAllLetters = "";

      for (let i = 0; i < monthsArr.length; i++) {
        if (monthsArr[i][monthThreeLetters]) {
          monthAllLetters = monthsArr[i][monthThreeLetters];
        }
      }

      let dayAndYear = "";

      if (dateString[4] === "0") {
        dayAndYear = dateString
          .slice(5, 6)
          .concat(", ", dateString.slice(7, 11));
      } else {
        dayAndYear = dateString
          .slice(4, 6)
          .concat(", ", dateString.slice(7, 11));
      }

      reformattedDate = monthAllLetters.concat(" ", dayAndYear);
    }
  };

  // Keeps user-selected date marker viewable even when traversing to other routes
  useEffect(() => {
    if (location.pathname) {
      for (let i = 0; i < document.getElementsByTagName("ABBR").length; i++) {
        if (
          document.getElementsByTagName("ABBR")[i].attributes[0].nodeValue ===
          reformattedDate
        ) {
          document
            .getElementsByTagName("ABBR")
            [i].parentElement.classList.add("react-calendar__tile--active");
          document
            .getElementsByTagName("ABBR")
            [i].parentElement.classList.add("react-calendar__tile--rangeStart");
          document
            .getElementsByTagName("ABBR")
            [i].parentElement.classList.add("react-calendar__tile--rangeEnd");
          document
            .getElementsByTagName("ABBR")
            [i].parentElement.classList.add(
              "react-calendar__tile--rangeBothEnds)"
            );
        }
      }
    }
  }, [reformattedDate, location.pathname]);

  formatDate();

  useEffect(() => {
    if (location.pathname) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

  const sixtyDaysFromNow = new Date(today);
  sixtyDaysFromNow.setDate(sixtyDaysFromNow.getDate() + 60);

  const dayOfTheWeek = today.getDay();
  const hourOfTheDay = today.getHours();

  const handleMinDate = () => {
    if (dayOfTheWeek === 0) {
      if (hourOfTheDay > 5) {
        return new Date(tomorrow);
      } else {
        return new Date(today);
      }
    } else if (dayOfTheWeek === 1) {
      return new Date(tomorrow);
    } else if (
      (dayOfTheWeek === 2) |
      (dayOfTheWeek === 3) |
      (dayOfTheWeek === 4)
    ) {
      if (hourOfTheDay > 7) {
        return new Date(tomorrow);
      } else {
        return new Date(today);
      }
    } else if (dayOfTheWeek === 5) {
      if (hourOfTheDay > 3) {
        return new Date(dayAfterTomorrow);
      } else {
        return new Date(today);
      }
    } else {
      return new Date(tomorrow);
    }
  };

  const weekNumberValues = document.getElementsByClassName(
    "react-calendar__month-view__weekNumbers"
  );

  useEffect(() => {
    changeNumberOfWeeks(weekNumberValues[0].childElementCount);
  }, [numberOfWeeks, weekNumberValues]);

  // Selects new date while preventing two markers from being active at the same time
  const handleValueClick = day => {
    dispatch(ACTION_SELECTED_DAY(day));
    for (let i = 0; i < document.getElementsByTagName("ABBR").length; i++) {
      document
        .getElementsByTagName("ABBR")
        [i].parentElement.classList.remove("react-calendar__tile--active");
      document
        .getElementsByTagName("ABBR")
        [i].parentElement.classList.remove("react-calendar__tile--rangeStart");
      document
        .getElementsByTagName("ABBR")
        [i].parentElement.classList.remove("react-calendar__tile--rangeEnd");
      document
        .getElementsByTagName("ABBR")
        [i].parentElement.classList.remove(
          "react-calendar__tile--rangeBothEnds"
        );
    }
  };

  const handleActiveMonthChange = () => {
    changeNumberOfWeeks(weekNumberValues[0].childElementCount);
    for (let i = 0; i < document.getElementsByTagName("ABBR").length; i++) {
      if (
        document.getElementsByTagName("ABBR")[i].attributes[0].nodeValue ===
        reformattedDate
      ) {
        document
          .getElementsByTagName("ABBR")
          [i].parentElement.classList.add("react-calendar__tile--active");
        document
          .getElementsByTagName("ABBR")
          [i].parentElement.classList.add("react-calendar__tile--rangeStart");
        document
          .getElementsByTagName("ABBR")
          [i].parentElement.classList.add("react-calendar__tile--rangeEnd");
        document
          .getElementsByTagName("ABBR")
          [i].parentElement.classList.add(
            "react-calendar__tile--rangeBothEnds)"
          );
      }
    }
  };

  const handleSelectTimeButtonClick = () => {
    dispatch(ACTION_SELECT_TIME_ACTIVE());
  };

  return (
    <div className="availability_container">
      <div className="availability_container_header">
        <Link to="/cart">
          <FontAwesomeIcon
            className="availability_back_arrow"
            icon={faChevronLeft}
          />
        </Link>
        <h1>AVAILABILITY</h1>
        <Link to={location => `${location.pathname}/timepreference`}>
          <FontAwesomeIcon
            className="availability_forward_arrow"
            style={{ display: selectTimeActive ? "block" : "none" }}
            icon={faChevronRight}
          />
        </Link>
      </div>
      <div className="select_a_date_header">
        <h2>SELECT A DATE</h2>
      </div>
      <p className="availability_statement">
        You can schedule an appointment between 12 hours and 60 days ahead of
        time.
      </p>
      <Calendar
        calendarType="ISO 8601"
        activeStartDate={selectedDay ? selectedDay : today}
        minDate={handleMinDate()}
        maxDate={new Date(sixtyDaysFromNow)}
        maxDetail={"month"}
        nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
        prevLabel={<FontAwesomeIcon icon={faChevronLeft} />}
        next2Label={null}
        prev2Label={null}
        onActiveDateChange={() => handleActiveMonthChange()}
        showNeighboringMonth={false}
        showWeekNumbers={true}
        tileClassName="calendar_tiles"
        tileDisabled={({ date }) =>
          (date.getDay() === 1) | (date.getDay() === 6)
        }
        onClickDay={value => handleValueClick(value)}
      />
      <Link
        to={location => `${location.pathname}/timepreference`}
        style={{ pointerEvents: selectedDay ? "auto" : "none" }}
        onClick={handleSelectTimeButtonClick}
      >
        <div
          className="select_time_button"
          style={{
            marginTop: numberOfWeeks < 6 ? "4vh" : "2vh",
            background: selectedDay ? "rgb(215, 156, 165)" : "#f0f0f0",
            color: selectedDay ? "rgb(255, 255, 255)" : "rgb(201, 201, 201)",
            transition: "background 0.5s ease, color 0.5s ease"
          }}
        >
          <p>Select a Time</p>
        </div>
      </Link>
    </div>
  );
};

export default Availability;
