import "bootstrap/dist/css/bootstrap.min.css";
import "./auth.css";
import FormSignUp from "./FormSignUp";

function SignUp() {
  return (
    <div className="div-sign-up">
      <div className="div-sign-up-left">
        <img
          className="img-sign-up"
          src="https://static8.depositphotos.com/1001311/873/i/600/depositphotos_8735967-stock-photo-sea-shells-with-sand-as.jpg"
        ></img>
      </div>
      <div className="div-sign-up-right">
        <div className="div-sign-up-right-form">
          <div className="div-sign-up-right-form-block">
            <FormSignUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
