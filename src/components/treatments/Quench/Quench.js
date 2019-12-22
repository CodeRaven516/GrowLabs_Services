import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spring, animated, Keyframes } from "react-spring/renderprops";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faClock, faTag } from "@fortawesome/free-solid-svg-icons";
import { InView } from "react-intersection-observer";
import ACTION_QUENCH_TOGGLE from "../../../actions/Treatments/Quench/ACTION_QUENCH_TOGGLE";
import ACTION_CALM_TOGGLE_RESET from "../../../actions/Treatments/Calm/ACTION_CALM_TOGGLE_RESET";
import ACTION_CLARIFY_TOGGLE_RESET from "../../../actions/Treatments/Clarify/ACTION_CLARIFY_TOGGLE_RESET";
import ACTION_BACIAL_TOGGLE_RESET from "../../../actions/Treatments/Bacial/ACTION_BACIAL_TOGGLE_RESET";
import ACTION_GLOW_TOGGLE_RESET from "../../../actions/Treatments/Glow/ACTION_GLOW_TOGGLE_RESET";
import ACTION_REJUVENATE_TOGGLE_RESET from "../../../actions/Treatments/Rejuvenate/ACTION_REJUVENATE_TOGGLE_RESET";
import ACTION_QUENCH_TOGGLE_RESET from "../../../actions/Treatments/Quench/ACTION_QUENCH_TOGGLE_RESET";
import ACTION_QUICKIE_TOGGLE_RESET from "../../../actions/Treatments/Quickie/ACTION_QUICKIE_TOGGLE_RESET";
import ACTION_CHEMICAL_PEEL_TOGGLE_RESET from "../../../actions/Treatments/ChemicalPeel/ACTION_CHEMICAL_PEEL_TOGGLE_RESET";
import ACTION_DERMAPLANING_TOGGLE_RESET from "../../../actions/Treatments/Dermaplaning/ACTION_DERMAPLANING_TOGGLE_RESET";
import ACTION_CBD_TOGGLE_RESET from "../../../actions/Treatments/CBD/ACTION_CBD_TOGGLE_RESET";
import ACTION_MICRONEEDLE_TOGGLE_RESET from "../../../actions/Treatments/Microneedle/ACTION_MICRONEEDLE_TOGGLE_RESET";
import "./Quench.css";
import "../../treatments_pages/Page_2/TreatmentsPage2.css";

const Quench = () => {
  const calmToggle = useSelector(state => state.calmToggle.toggle);
  const clarifyToggle = useSelector(state => state.clarifyToggle.toggle);
  const bacialToggle = useSelector(state => state.bacialToggle.toggle);
  const glowToggle = useSelector(state => state.glowToggle.toggle);
  const rejuvenateToggle = useSelector(state => state.rejuvenateToggle.toggle);
  const quenchToggle = useSelector(state => state.quenchToggle.toggle);
  const quickieToggle = useSelector(state => state.quickieToggle.toggle);
  const chemicalpeelToggle = useSelector(
    state => state.chemicalpeelToggle.toggle
  );
  const dermaplaningToggle = useSelector(
    state => state.dermaplaningToggle.toggle
  );
  const cbdToggle = useSelector(state => state.cbdToggle.toggle);
  const microneedleToggle = useSelector(
    state => state.microneedleToggle.toggle
  );

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (!quenchToggle) {
      dispatch(ACTION_QUENCH_TOGGLE());
      if (calmToggle) {
        dispatch(ACTION_CALM_TOGGLE_RESET());
      }
      if (clarifyToggle) {
        dispatch(ACTION_CLARIFY_TOGGLE_RESET());
      }
      if (bacialToggle) {
        dispatch(ACTION_BACIAL_TOGGLE_RESET());
      }
      if (glowToggle) {
        dispatch(ACTION_GLOW_TOGGLE_RESET());
      }
      if (rejuvenateToggle) {
        dispatch(ACTION_REJUVENATE_TOGGLE_RESET());
      }
      if (quickieToggle) {
        dispatch(ACTION_QUICKIE_TOGGLE_RESET());
      }
      if (chemicalpeelToggle) {
        dispatch(ACTION_CHEMICAL_PEEL_TOGGLE_RESET());
      }
      if (dermaplaningToggle) {
        dispatch(ACTION_DERMAPLANING_TOGGLE_RESET());
      }
      if (cbdToggle) {
        dispatch(ACTION_CBD_TOGGLE_RESET());
      }
      if (microneedleToggle) {
        dispatch(ACTION_MICRONEEDLE_TOGGLE_RESET());
      }
    } else {
      dispatch(ACTION_QUENCH_TOGGLE_RESET());
    }
  };

  const cardDescriptionHandler = () => {
    if (quenchToggle) {
      return (
        <>
          <div className="card_description_paragraph_toggle">
            <div className="card_description_icon_wrapper_container">
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faClock}
                />
                <p className="card_description_paragraph_title">Duration</p>
              </div>
              <div className="card_description_paragraph_value">
                <p>50 minutes</p>
              </div>
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faTag}
                />
                <p className="card_description_paragraph_title">Price</p>
              </div>
              <div className="card_description_paragraph_value">
                <p>$70</p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <p className="card_description_paragraph">
          Quench helps dehydrated, dry and irritated skin look dewy, glowing and
          healthy by bringing water content back in.
        </p>
      );
    }
  };

  const SuitcaseBounce = Keyframes.Spring({
    suitcaseBounce: [
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 100 }
      },
      {
        marginTop: "-5px",
        color: "rgb(155, 98, 107)",
        config: { duration: 300 }
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 }
      },
      {
        marginTop: "-5",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 }
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 }
      },
      {
        marginTop: "-3px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 }
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 }
      }
    ]
  });

  const bookButtonBounce = () => {
    if (quenchToggle) {
      return (
        <SuitcaseBounce state="suitcaseBounce">
          {styles => (
            <FontAwesomeIcon
              className="card_suitcase_icon"
              style={styles}
              icon={faSuitcase}
            />
          )}
        </SuitcaseBounce>
      );
    } else {
      return (
        <FontAwesomeIcon
          className="card_suitcase_icon"
          style={{
            color: quenchToggle ? "rgb(155, 98, 107)" : "rgb(175, 118, 127)",
            transition: "ease all 0.5s"
          }}
          icon={faSuitcase}
        />
      );
    }
  };
  return (
    <InView threshold={0.2} triggerOnce={true}>
      {({ inView, ref }) => (
        <div className="quench_wrapping" ref={ref}>
          {inView ? (
            <Spring
              from={{ position: "relative", opacity: 0 }}
              to={{ position: "relative", opacity: 1 }}
              config={{ duration: 1000 }}
            >
              {props => (
                <section className="card" style={props}>
                  <div
                    className="card_image"
                    style={{
                      backgroundColor: quenchToggle
                        ? "rgb(255, 198, 207)"
                        : "rgba(211, 211, 211, 0.4)",
                      boxShadow: quenchToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), -3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 3px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s"
                    }}
                  >
                    <Spring
                      from={{ x: 200 }}
                      to={{ x: 0 }}
                      config={{ delay: 300, duration: 4000 }}
                    >
                      {props => (
                        <svg
                          className="card_svg"
                          width="100%"
                          height="15rem"
                          viewBox="0 0 50.006 50.006"
                        >
                          <circle
                            cx="25"
                            cy="25"
                            r="23"
                            stroke={
                              quenchToggle
                                ? "rgb(235, 178, 187)"
                                : "rgba(191, 191, 191)"
                            }
                            strokeWidth="0.1"
                            fill="white"
                          />
                          <g transform="translate(0, -245)">
                            <animated.path
                              strokeDasharray="200"
                              strokeDashoffset={`${props.x}`}
                              className="quench_icon_path"
                              stroke="#000"
                              d="M28.78 277.17c.798-.07 1.353-.218 2.032-.54.844-.4 1.753-1.143 1.86-1.521.125-.447.018-.868-.298-1.173-.218-.21-.408-.278-.766-.276-.349.002-.474.062-.954.459-1.482 1.225-3.484 1.151-4.909-.181-.957-.896-2.021-1.422-3.244-1.605-.381-.058-1.26-.06-1.625-.003a5.847 5.847 0 00-2.524.991c-.505.351-.898.733-1.007.978-.165.37-.099.837.162 1.14.238.276.44.363.845.363.405 0 .5-.042.954-.43.54-.459 1.079-.715 1.747-.829a3.168 3.168 0 011.246-.002c.791.137 1.35.447 2.14 1.186.53.495 1.32.945 2.079 1.183.51.16.769.213 1.273.257.221.02.418.038.438.041.019.003.267-.014.551-.039zm.41-4.439a5.546 5.546 0 001.676-.528c.709-.344 1.426-.883 1.677-1.257a1.088 1.088 0 00-.911-1.69c-.335 0-.51.085-.957.457-.42.35-1.044.673-1.527.79-.428.105-1.218.105-1.653.001-.645-.154-1.119-.414-1.712-.939a12.565 12.565 0 00-.53-.449 9.098 9.098 0 01-.22-.17c-.098-.08-.546-.343-.804-.471-1.618-.805-3.727-.767-5.304.095-.773.423-1.522 1.075-1.616 1.406-.174.61.136 1.24.687 1.403.467.138.792.048 1.231-.339.719-.632 1.532-.945 2.449-.942.813.003 1.565.25 2.148.706.136.107.546.46.76.654.227.206.857.607 1.235.785.45.212 1.224.448 1.638.5.487.06 1.29.055 1.733-.012zm-.245-4.364a5.492 5.492 0 002.513-.89l.436-.292c.178-.119.65-.594.715-.718.117-.224.15-.53.084-.78-.08-.306-.213-.492-.468-.656-.183-.117-.256-.138-.54-.15-.4-.019-.57.05-.971.398-.722.625-1.486.913-2.414.91-.98-.002-1.738-.311-2.546-1.04-.471-.425-.772-.651-1.176-.884a5.823 5.823 0 00-6.943.853c-.27.257-.38.502-.378.833.006.702.642 1.222 1.305 1.068.29-.068.378-.119.718-.414.778-.675 1.779-1 2.731-.887.931.11 1.482.367 2.225 1.038.494.446.761.644 1.2.89a5.766 5.766 0 003.509.72z"
                              fill="rgba(173, 216, 230, 0.8)"
                              strokeWidth=".4"
                              strokeOpacity="1"
                            />
                          </g>
                        </svg>
                      )}
                    </Spring>
                    <div
                      className="card_border_right"
                      style={{
                        borderRight: quenchToggle
                          ? "1px solid rgbA(155, 98, 107, 0.4)"
                          : "1px solid rgbA(211, 211, 211)"
                      }}
                    />
                  </div>
                  <div
                    className="card_description"
                    style={{
                      backgroundColor: quenchToggle
                        ? "rgba(255, 198, 207, 0.2)"
                        : "rgba(235, 235, 235, 0.2)",
                      boxShadow: quenchToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), 3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 4px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s"
                    }}
                  >
                    <div className="card_description_inner_wrapper">
                      <h2 style={{ fontWeight: 400 }}>QUENCH</h2>
                      <p
                        className="card_description_subheader"
                        style={{ opacity: 0.6 }}
                      >
                        Hydrating
                      </p>
                      {cardDescriptionHandler()}
                      <div
                        className="card_bottom_wrapper"
                        style={{
                          color: quenchToggle
                            ? "rgb(155, 98, 107)"
                            : "rgb(175, 118, 127)",
                          transition: "ease all 0.5s"
                        }}
                      >
                        <p className="card_toggler" onClick={handleToggle}>
                          {quenchToggle ? "SEE DESCRIPTION" : "LEARN MORE"}
                        </p>
                        <span className="card_bottom_spacer" />
                        {bookButtonBounce()}
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </Spring>
          ) : null}
        </div>
      )}
    </InView>
  );
};

export default Quench;
