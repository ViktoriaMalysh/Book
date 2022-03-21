import "bootstrap/dist/css/bootstrap.min.css";
import "./signIn.css";
import FormSignIn from "./FormSignIn";

function SignIn() {
  return (
    <div className="div-sign-in">
      <div className="div-sign-in-left">
        <img
          className="img-sign-in"
          src="https://static8.depositphotos.com/1001311/873/i/600/depositphotos_8735967-stock-photo-sea-shells-with-sand-as.jpg"
        ></img>
      </div>
      <div className="div-sign-in-right">
        <div className="div-sign-in-right-form">
          <div className="div-sign-in-right-form-block">
            <FormSignIn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;