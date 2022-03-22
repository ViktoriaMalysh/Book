import axios from "axios";
import { API_URL } from "../config";
import {
  CLEAR_USER,
  IS_AUTH,
  SHOW_ALERT,
  USER_COUNTRY,
  USER_DATE_OF_BIRTH,
  USER_EMAIL,
  USER_GENDER,
  USER_ID,
  USER_PHONE,
  USER_IS_ADMIN,
  SUCCESS,
  USER_FIRST_NAME,
  USER_LAST_NAME,
  UPDATE,
  VALIDATE,
  DELETE,
} from "./types";

const alert = (message) => {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: message });
    setTimeout(() => {
      dispatch({ type: SHOW_ALERT, payload: false });
    }, 1200);
  };
};

export const fetchVerifyToken = (token) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(
        `${API_URL}users/verify_token`,
        {},
        { headers: { authorization: token } }
      );
      if (result.status === 200) {
        console.log('result', result)
        localStorage.setItem("token", result.data.token);
        dispatch({ type: IS_AUTH, payload: true });
        dispatch({ type: USER_ID, payload: result.data.id });
        dispatch({ type: USER_FIRST_NAME, payload: result.data.firstName });
        dispatch({ type: USER_LAST_NAME, payload: result.data.lastName });
        dispatch({ type: USER_EMAIL, payload: result.data.email });
        dispatch({ type: USER_IS_ADMIN, payload: result.data.isAdmin });
        dispatch({ type: USER_GENDER, payload: result.data.gender });
        dispatch({
          type: USER_DATE_OF_BIRTH,
          payload: result.data.dataOfBirth,
        });
        dispatch({ type: USER_PHONE, payload: result.data.phone });
        dispatch({ type: USER_COUNTRY, payload: result.data.country });
      }
    } catch (err) {
      console.log("Error", err);
      dispatch(alert("Unable to extend session, log in again"));
    }
  };
};

export const fetchSignUp = (user) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(`${API_URL}users/sign_up`, {
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        country: user.country,
        email: user.email,
        dateOfBirth: "dvhdvb",
        password: user.password,
      });

      if (result.status === 200) {
        localStorage.setItem("token", result.data.token);
        dispatch({ type: IS_AUTH, payload: true });
        dispatch({ type: USER_ID, payload: result.data.id });
        dispatch({ type: USER_FIRST_NAME, payload: result.data.firstName });
        dispatch({ type: USER_LAST_NAME, payload: result.data.lastName });
        dispatch({ type: USER_GENDER, payload: result.data.gender });
        dispatch({ type: USER_COUNTRY, payload: result.data.country });
        dispatch({
          type: USER_DATE_OF_BIRTH,
          payload: result.data.dateOfBirth,
        });
        dispatch({ type: USER_EMAIL, payload: result.data.email });
        dispatch({ type: USER_IS_ADMIN, payload: result.data.isAdmin });
        dispatch({ type: SUCCESS, payload: true });
        dispatch(alert(result.data.message));
      }
    } catch (err) {
      console.log(err.message);
      dispatch(
        alert(`${user.email} is already in use, please try another email`)
      );
    }
  };
};

export const fetchSignIn = (user) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(`${API_URL}users/sign_in`, {
        email: user.email,
        password: user.password,
      });

      if (result.status === 200) {
        localStorage.setItem("token", result.data.token);
        dispatch({ type: IS_AUTH, payload: true });
        dispatch({ type: USER_ID, payload: result.data.id });
        dispatch({ type: USER_FIRST_NAME, payload: result.data.firstName });
        dispatch({ type: USER_LAST_NAME, payload: result.data.lastName });
        dispatch({ type: USER_GENDER, payload: result.data.gender });
        dispatch({ type: USER_COUNTRY, payload: result.data.country });
        dispatch({
          type: USER_DATE_OF_BIRTH,
          payload: result.data.dateOfBirth,
        });
        dispatch({ type: USER_PHONE, payload: result.data.phone });
        dispatch({ type: USER_EMAIL, payload: result.data.email });
        dispatch({ type: USER_IS_ADMIN, payload: result.data.isAdmin });
        dispatch({ type: SUCCESS, payload: true });
        dispatch(alert(result.data.message));
      }
    } catch (err) {
      console.log(err.message);
      dispatch(
        alert("User is not found. check if the email or password is correct")
      );
    }
  };
};

export const fetchDeleteAccount = (token) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(
        `${API_URL}users/delete_account`,
        {},
        { headers: { authorization: token } }
      );
      if (result.status === 200) {
        localStorage.clear();
        dispatch({ type: DELETE, payload: result.data.delete });
        dispatch({ type: IS_AUTH, payload: false });
        dispatch({ type: CLEAR_USER });
        dispatch(alert(result.data.message));
      }
    } catch (err) {
      console.log("Error", err.message);
      dispatch(alert("Account has not been deleted"));
    }
  };
};

export const fetchChangeProfile = (user) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(`${API_URL}users/change_profile`, {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        dateOfBirth: user.dateOfBirth,
        country: user.country,
      });
      if (result.status === 200) {
        localStorage.setItem("token", result.data.token);
        dispatch({ type: UPDATE, payload: result.data.update });
        dispatch(alert(result.data.message));
      }
    } catch (err) {
      console.log("Error", err.message);
      dispatch(alert("User not found"));
    }
  };
};

export const fetchChangeEmail = (user) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(`${API_URL}users/change_email`, {
        id: user.id,
        email: user.email,
      });
      if (result.status === 200) {
        localStorage.setItem("token", result.data.token);
        dispatch({ type: UPDATE, payload: result.data.update });
        dispatch(alert(result.data.message));
      }
    } catch (err) {
      console.log("Error", err.message);
      dispatch(alert("User not found"));
    }
  };
};

export const fetchChangePhone = (user) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(`${API_URL}users/change_phone`, {
        id: user.id,
        phone: user.phone,
      });
      if (result.status === 200) {
        dispatch({ type: UPDATE, payload: true });
        dispatch(alert(result.data.message));
      }
    } catch (err) {
      console.log("Error", err.message);
      dispatch(alert("User not found"));
    }
  };
};

export const fetchChangePass = (id, password) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(`${API_URL}users/validate_password`, {
        id: id,
        password: password,
      });
      if (result.status === 200) {
        dispatch({ type: VALIDATE, payload: result.data.validate });
      }
    } catch (err) {
      console.log("Error", err.message);
      dispatch(alert("Incorrect password"));
    }
  };
};

export const fetchChangePassword = (user) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(`${API_URL}users/change_password`, {
        id: user.id,
        password: user.password,
      });
      if (result.status === 200) {
        localStorage.setItem("token", result.data.token);
        dispatch({ type: UPDATE, payload: result.data.update });
        dispatch(alert(result.data.message));
      }
    } catch (err) {
      console.log("Error", err.message);
      dispatch(alert("User not found"));
    }
  };
};
