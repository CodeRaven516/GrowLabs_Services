import React from "react";
import "./LEDTherapy.css";
import "../../treatments/card_styling.css";

const LEDTherapyRemovedNotification = props => {
  return (
    <div className="notification_removed_container">
      <svg
        width={
          props.currentScreenSize === ""
            ? props.initialScreenSize >= 1800
              ? "25%"
              : "29%"
            : props.currentScreenSize >= 1800
            ? "25%"
            : "29%"
        }
        height={
          props.currentScreenSize === ""
            ? props.initialScreenSize >= 1800
              ? "8rem"
              : props.initialScreenSize >= 375
              ? "5rem"
              : "4rem"
            : props.currentScreenSize >= 1800
            ? "8rem"
            : props.currentScreenSize >= 375
            ? "5rem"
            : "4rem"
        }
        viewBox="0 0 56.356 56.356"
      >
        <circle
          cx="28"
          cy="28"
          r="22.25"
          stroke="rgb(220, 191, 196)"
          strokeWidth="0.5"
          fill="white"
        />
        <g transform="translate(11 11)">
          <path
            className="led_therapy_icon_path"
            stroke="rgb(131, 131, 131)"
            strokeWidth="0.4"
            fill="rgb(131, 131, 131)"
            d="M23.743 52.05c-1.497-.896-1.552-1.055-1.63-4.665-.069-3.2-.086-3.303-.592-3.565-.73-.38-1.163-1.331-1.574-3.457-.772-4.006-2.2-8.233-4.668-13.816-1.486-3.361-1.8-4.384-2.002-6.537-.255-2.71.601-6.19 2.154-8.75.407-.67 1.549-2.012 2.537-2.98 1.496-1.467 2.148-1.926 3.897-2.744 4.679-2.187 9.305-2.196 13.95-.024 1.628.762 2.409 1.301 3.807 2.631 2.794 2.658 4.192 5.356 4.72 9.104.44 3.123.067 4.836-2.156 9.913-2.426 5.543-4.015 10.434-4.64 14.282-.19 1.177-.677 2.035-1.354 2.386-.484.251-.506.389-.574 3.562-.069 3.175-.092 3.323-.628 3.885-1.01 1.06-1.628 1.176-6.284 1.175-3.791 0-4.373-.047-4.963-.4zm9.966-1.595l.501-.486-2.983-.108c-2.461-.089-3.023-.17-3.216-.467-.17-.261-.153-.454.06-.702.24-.28.825-.342 3.271-.342h2.98v-1.499l-3.039-.06c-2.55-.05-3.076-.118-3.272-.42-.17-.26-.153-.453.06-.701.24-.281.825-.342 3.271-.342h2.98v-1.08H23.409v.54c0 .49.086.54.946.543 1.189.004 1.563.23 1.467.885-.067.458-.204.522-1.244.58-1.168.065-1.17.066-1.17.798s.002.734 1.17.799c1.087.06 1.174.106 1.239.651.074.62-.14.734-1.629.866l-.668.059.501.486c.485.47.637.485 4.844.485 4.207 0 4.358-.015 4.844-.485zm1.905-7.99c.129-.15.488-1.486.798-2.969.711-3.402 1.96-7.196 3.806-11.559.795-1.877 1.401-3.455 1.349-3.506-.053-.051-2.18.016-4.729.149-5.856.305-10.09.305-15.946 0-2.547-.133-4.68-.196-4.737-.14-.058.056.25.908.685 1.894 2.207 4.998 3.689 9.409 4.565 13.592.26 1.244.58 2.385.71 2.536.34.398 13.16.4 13.5.002zm-12.26-3.891c-.21-.162-.739-2.023-1.386-4.876-.962-4.24-1.019-4.643-.69-4.962.756-.733 1.08-.09 2.06 4.093 1.313 5.596 1.302 5.515.787 5.782-.309.16-.528.15-.77-.037zm3.385.055c-.398-.238-1.167-9.15-.842-9.761.238-.448.703-.49 1.041-.095.198.231.918 7.37.924 9.154.002.567-.659.98-1.123.702zm3.305-.069c-.437-.424.23-9.561.72-9.862.448-.275.564-.26.885.115.222.259.208 1.239-.065 4.867-.374 4.971-.625 5.767-1.54 4.88zm3.432.033c-.395-.383-.358-.66.735-5.401a515.85 515.85 0 001.002-4.395c0-.151.723-.273 1.002-.17.49.183.428.735-.582 5.202-1.06 4.69-1.418 5.48-2.157 4.764zm7.305-15.68l1.67-.144.286-1.295c.176-.798.241-2.024.169-3.195-.346-5.596-3.845-10.13-9.421-12.206-1.358-.506-1.8-.56-4.62-.56-2.82 0-3.26.054-4.619.56-2.18.812-3.837 1.839-5.38 3.334-2.417 2.343-3.84 5.358-4.066 8.613-.116 1.686.184 4.334.53 4.666.543.522 19.994.695 25.451.227z"
          />
        </g>
      </svg>
      <div className="notification_text_container">
        <h3>LED Therapy Removed</h3>
        <p>The LED Therapy add-on has been removed from your cart</p>
      </div>
    </div>
  );
};

export default LEDTherapyRemovedNotification;
