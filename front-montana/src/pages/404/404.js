import imgNotFound from "./404.png";
import "./404.css";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="div-not-found">
      <div className="div-not-found-header" />
      <div className="div-not-found-message">
        <img className="img-not-found" src={imgNotFound} />
        <span className="span-not-found-title">Opos... Page Not Found!</span>
        <span className="span-not-found-text">
          The page you looking for not found may be it not exist or removed.
        </span>
        <button
          className="button-not-found-back-home"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </button>
      </div>

      <div className="div-not-found-footer div-8-end">
        <Footer />
      </div>
    </div>
  );
}

export default NotFound;
