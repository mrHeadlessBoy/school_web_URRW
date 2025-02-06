import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import CSS

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the School Website</h1>
      <div className="button-container">
        <button onClick={() => navigate("/senior-register")}>Senior Registration</button>
        <button onClick={() => navigate("/junior-register")}>Junior Registration</button>
      </div>
    </div>
  );
};

export default Home;
