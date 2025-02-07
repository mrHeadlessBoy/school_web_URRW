import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import CSS

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>แบบฟอร์มรักสมัครนักเรียน</h1>
      <div className="button-container">
        <button onClick={() => navigate("/senior-register")}>รับสมัคร ม.ปลาย</button>
        <button onClick={() => navigate("/junior-register")}>รับสมัคร ม.ต้น</button>
      </div>
    </div>
  );
};

export default Home;
