import { useNavigate } from "react-router-dom";
import "./backbt.css"

const BackToHomeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="btn-back"
    >
      ย้อนกลับ
    </button>
  );
};

export default BackToHomeButton;