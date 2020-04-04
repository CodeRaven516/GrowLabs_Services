import React from "react";
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "../../ConsentForm.css";
import "../../../../../../bootstrap_forms.min.css";
import UltimateSkinCareGoals from "../../Questions/UltimateSkinCareGoals";
import AnythingElseWeShouldKnow from "../../Questions/AnythingElseWeShouldKnow";

const ConsentFormPage6 = (props) => {
  const splashScreenComplete = useSelector(
    (state) => state.splashScreenComplete.splashScreenComplete
  );
  const userAuthenticated = useSelector(
    (state) => state.userAuthenticated.user_authenticated
  );

  const redirectToHome = () => {
    if (!splashScreenComplete) {
      return <Redirect to="/" />;
    }
  };

  const redirectToLogInPage = () => {
    if (!userAuthenticated) {
      return <Redirect to="/account/login" />;
    }
  };

  return (
    <div className="client_consent_form_container">
      {redirectToHome()}
      {redirectToLogInPage()}
      <div className="client_consent_form_header">
        <Link to="/account/clientprofile">
          <FontAwesomeIcon
            className="client_consent_form_header_back_arrow"
            icon={faChevronLeft}
          />
        </Link>
        <h1>CONSENT FORM</h1>
      </div>
      <UltimateSkinCareGoals
        currentScreenSize={props.currentScreenSize}
        initialScreenSize={props.initialScreenSize}
      />
      <AnythingElseWeShouldKnow
        currentScreenSize={props.currentScreenSize}
        initialScreenSize={props.initialScreenSize}
      />
      <div className="consent_form_bottom_button_container">
        <Link
          className="next_page_link_container"
          to="/account/clientprofile/consentform/page7"
        >
          <div
            className="next_page_button"
            style={{
              background: "rgb(44, 44, 52)",
              color: "rgb(255, 255, 255)",
              transition: "background 0.5s ease, color 0.5s ease",
            }}
          >
            <p>Next Page</p>
          </div>
        </Link>
        <div className="consent_form_previous_page_button">
          <Link to="/account/clientprofile/consentform/page3">
            <p>Previous Page</p>
          </Link>
        </div>

        <p className="consent_form_page_number_info">Page 6 of 7</p>
      </div>
    </div>
  );
};

export default ConsentFormPage6;
