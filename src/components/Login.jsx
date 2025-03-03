import React from "react";
import bgImage from "../assets/image.png"; // Remplace par ton image

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-section">
        <img src={bgImage} alt="Eco bag" />
      </div>
      <div className="form-section">
        <h1 className="logo">Waste<span className="text-green">Less</span></h1>
        <p className="tagline">Reducing Waste, Saving Taste!</p>
        <input type="text" placeholder="Username" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <button className="login-button">LOGIN</button>

      </div>
    </div>
  );
};

export default Login;