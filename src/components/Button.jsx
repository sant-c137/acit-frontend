import React, { useState, useRef } from 'react';
import './Button.css';

export const Button = ({ text, color }) => {
  const [isLoading, setIsLoading] = useState(false);
  const btnRef = useRef(null);
  const spinnerRef = useRef(null);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <button
        type="submit"
        className={`sing-in-btn ${isLoading ? 'loading' : ''}`}
        onClick={handleClick}
        ref={btnRef}
        style={{ backgroundColor: color }}
      >
        {isLoading ? (
          <img
            src="BlueLoader.svg"
            alt=""
            className="login-loader loader-checked"
            ref={spinnerRef}
          />
        ) : (
          text
        )}
      </button>
    </>
  );
};
