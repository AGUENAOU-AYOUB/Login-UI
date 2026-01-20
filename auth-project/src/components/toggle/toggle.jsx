import React, { useState } from "react";
import './toggle.css';

function Toggle() {
  const [isMoved, setIsMoved] = useState(false);
  const toggleStyle = {
    backgroundColor: "#011c40",
    width: "600px",
    height: "750px",

    zIndex: "1000",
    position: "absolute",
    left: isMoved ? "calc(100% - 600px)" : "0",
    transition: "left 0.5s ease, border-radius 0.5s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: '250px 100px 0px 100px',
    fontFamily: '"poppins"',
    color: 'white',
    boxShadow:isMoved ? "-2px 0px 20px 3px rgba(0, 0, 0, 0.38)" : "2px 0px 20px 3px rgba(0, 0, 0, 0.39)",
    borderTopLeftRadius: isMoved ? "300px" : "36px",
    borderBottomLeftRadius: isMoved ? "150px" : "36px",
    borderTopRightRadius: isMoved ? "36px" : "300px",
    borderBottomRightRadius: isMoved ? "36px" : "150px",
  };
  

  const headingStyle = {
    fontSize: '40px',
    marginBottom: '20px'
  };

  const paragraphStyle = {
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: '50px'
  }
  // Dynamic content
  const title = isMoved ? 'Welcome Back!' : 'Hello Friend!';
  const description = isMoved
    ? 'Enter your personal details to use all of our website features'
    : 'Register with your personal details to use all of our website features';
  const buttonText = isMoved ? 'Sign In' : 'Register Here';

  const handleClick = () => {
    setIsMoved(!isMoved);
  };

   return (
    <div className='toggle' style={toggleStyle}>
      <h2 style={headingStyle}>{title}</h2>
      <p style={paragraphStyle}>{description}</p>
      <button className="toggleBtn"  onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}
export default Toggle;
