import React from "react";
import { Spring } from "react-spring/renderprops";
import { useSelector } from "react-redux";

const Bottle = props => {
  const splashScreenComplete = useSelector(
    state => state.splashScreenComplete.splashScreenComplete
  );
  return (
    <Spring
      from={{ display: "none", opacity: "0" }}
      to={{ display: "inline", opacity: "1" }}
      config={{
        delay:
          props.initialScreenSize >= 600
            ? props.currentScreenSize >= 600 || !props.currentScreenSize
              ? 5000
              : 4000
            : 4000,
        duration: 550
      }}
    >
      {props => (
        <svg
          className="bottle"
          width="100%"
          style={{
            display: splashScreenComplete ? "inline" : `${props.display}`,
            opacity: splashScreenComplete ? "1" : `${props.opacity}`
          }}
          viewBox="0 0 50 50"
        >
          <g id="layer1" transform="translate(0 -850) scale(3)">
            <g id="g826" transform="matrix(.13884 0 0 .155 62.235 293.735)">
              <path
                d="M-416.035 16.757c-.401-.443-.438-2.593-.438-25.49v-25.006l.84-1.696c1.035-2.09 3.46-4.516 5.8-5.802l1.694-.93.07-1.318c.124-2.377.182-2.471 1.585-2.561l1.256-.08.074-3.113.075-3.112-.67-.255c-.67-.254-.67-.257-.67-3.7v-3.447h3.455c1.9 0 3.954.11 4.564.246.61.135 2.36.387 3.887.56 3.523.4 9.877 1.646 11.191 2.196l1.005.421-.079 1.794-.078 1.795-6.085.132-6.086.132v6.35l1.323.133 1.323.132.132 1.847.133 1.848 1.694.93c2.415 1.327 4.854 3.77 5.837 5.85l.802 1.696v25.028c0 23.911-.02 25.048-.483 25.466-.439.397-1.94.438-16.099.438-14.79 0-15.637-.026-16.052-.484zm24.962-26.768v-12.171H-408.8v11.994c0 6.597.08 12.074.176 12.171.097.097 4.086.177 8.864.177h8.687z"
                id="path840"
                fill="#e4e8ec"
              />
              <path
                d="M-416.035 16.757c-.401-.443-.438-2.585-.438-25.378 0-23.837.021-24.943.5-26.04 1.69-3.872 5.971-7.2 10.745-8.351 2.135-.516 8.466-.519 10.583-.005 2.363.573 5.36 2.081 7.088 3.567 1.806 1.554 2.663 2.633 3.522 4.436l.63 1.323.003 25.028c.002 23.913-.02 25.048-.482 25.466-.438.397-1.94.438-16.098.438-14.792 0-15.638-.026-16.053-.484zm25.163-26.702l.069-12.237H-409.064v12.149c0 9.47.072 12.178.33 12.284.182.074 4.26.114 9.062.088l8.731-.047zm-13.569-36.645c-.081-.327-.113-1.786-.07-3.241l.076-2.646h8.996l.076 2.872c.05 1.891-.03 2.999-.231 3.242-.238.287-1.236.368-4.502.368-4.131 0-4.198-.009-4.345-.595z"
                id="path838"
                fill="rgb(173,199,217)"
              />
              <path
                d="M-415.901 16.567c-.226-.496-.308-7.203-.308-25.417v-24.742l.719-1.505c1.062-2.227 4.022-5.039 6.583-6.254 1.117-.53 2.817-1.147 3.78-1.372 2.358-.55 8.042-.546 10.415.008 4.397 1.026 8.514 4.008 10.187 7.379l.86 1.732v24.748c0 18.218-.08 24.927-.307 25.423l-.307.674H-415.594zm24.939-14.039c.373-.143.418-1.498.418-12.57v-12.411l-9.326.07-9.327.069-.069 12.14c-.05 8.744.015 12.242.231 12.502.242.291 1.969.36 8.977.36 4.772 0 8.865-.071 9.096-.16zm-13.479-49.118c-.081-.327-.113-1.786-.07-3.241l.076-2.646h8.996l.076 2.872c.05 1.891-.03 2.999-.231 3.242-.238.287-1.236.368-4.502.368-4.131 0-4.198-.009-4.345-.595z"
                id="path836"
                fill="rgb(168,194,212)"
              />
              <path
                d="M-415.637 16.567c-.226-.496-.307-7.201-.307-25.408v-24.733l.82-1.646c1.638-3.29 5.899-6.311 10.16-7.203 1.054-.22 3.278-.388 5.16-.388 4.877-.001 7.794.813 11.022 3.075 1.976 1.385 3.205 2.778 4.145 4.7l.708 1.444V-8.85c0 18.214-.081 24.92-.307 25.417l-.307.674h-30.787zm24.913-13.944c.416-.305.446-1.31.382-12.766l-.07-12.436h-19.05l-.07 12.436c-.063 11.455-.033 12.461.382 12.766.65.476 17.778.476 18.426 0zM-404.44-46.59c-.081-.327-.113-1.786-.07-3.241l.076-2.646h8.996l.076 2.872c.05 1.891-.03 2.999-.231 3.242-.238.287-1.236.368-4.502.368-4.131 0-4.198-.009-4.345-.595z"
                id="path834"
                fill="#cad0d9"
              />
              <path
                d="M-415.637 16.567c-.226-.496-.307-7.201-.307-25.408v-24.733l.82-1.646c1.638-3.29 5.899-6.311 10.16-7.203 1.054-.22 3.278-.388 5.16-.388 4.877-.001 7.794.813 11.022 3.075 1.976 1.385 3.205 2.778 4.145 4.7l.708 1.444V-8.85c0 18.214-.081 24.92-.307 25.417l-.307.674h-30.787zm24.913-13.944c.416-.305.446-1.31.382-12.766l-.07-12.436h-19.05l-.07 12.436c-.063 11.455-.033 12.461.382 12.766.65.476 17.778.476 18.426 0z"
                id="path832"
                fill="rgb(178,204,222)"
              />
              <path
                d="M-415.421 16.562c-.161-.423-.258-9.98-.258-25.407v-24.73l.768-1.521c.71-1.406 2.297-3.187 4.052-4.546 1.134-.878 4.104-2.131 6.007-2.535 2.287-.485 7.598-.473 9.935.022 4.283.907 8.398 3.856 9.965 7.14l.758 1.588v24.66c0 18.15-.08 24.838-.307 25.334l-.307.674h-30.355zm25.246-14.027c.242-.631.185-24.798-.06-25.183-.166-.262-2.316-.32-9.852-.265l-9.64.07-.068 12.567c-.038 6.912-.012 12.717.058 12.899.098.256 2.298.33 9.764.33 8.544 0 9.655-.047 9.798-.418z"
                id="path830"
                fill="rgb(178,204,222)"
              />
              <path
                d="M-415.097 16.362c-.239-.66-.318-6.97-.318-25.348v-24.47l.71-1.44c1.466-2.98 5.043-5.661 9.031-6.77 2.071-.576 7.346-.775 9.685-.365 4.591.805 8.42 3.176 10.438 6.464l.96 1.565.079 24.629c.06 18.701.002 24.868-.24 25.622l-.32.992h-29.707zm25.088-13.409c.395-.625.339-25.479-.059-25.876-.493-.493-19.35-.452-19.76.044-.217.26-.281 3.927-.232 13.15l.07 12.79.66.191c.364.105 4.804.17 9.866.144 7.86-.039 9.241-.104 9.455-.443z"
                id="path828"
                fill="rgb(153,179,197)"
              />
            </g>
            <path
              d="M5.42 290.276l2.59-.022-.024 3.887-2.558-.035z"
              id="path835"
              fill="#fff"
              stroke="none"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeOpacity="1"
              strokeMiterlimit="4"
              strokeDasharray="none"
              fillOpacity="1"
            />
          </g>
        </svg>
      )}
    </Spring>
  );
};

export default Bottle;
