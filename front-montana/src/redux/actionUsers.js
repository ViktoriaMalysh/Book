import axios from "axios";
import { API_URL } from "../config";
import {
  CHANGE,
  CLEAR_USER,
  ERROR,
  FLAG,
  IS_AUTH,
  REQUESTED_FAILED_USER,
  REQUESTED_SUCCEEDED_USER,
  REQUESTED_USER,
  SHOW_ALERT,
  USER_AGE,
  USER_COUNTRY,
  USER_DATE_OF_BIRTH,
  USER_EMAIL,
  USER_GENDER,
  USER_ID,
  USER_NAME,
  USER_PHONE,
  USER_IS_ADMIN,
  USER_SURNAME,
  SUCCESS,
} from "./types";

const alert = (message) => {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: message });
    setTimeout(() => {
      dispatch({ type: SHOW_ALERT, payload: false });
    }, 1200);
  };
};

// export const fetchVerifyToken = (token) => {
//   return (dispatch) => {
//     dispatch(requestUser());
//     axios
//       .post(
//         `${API_URL}users/verifyToken`,
//         {},
//         { headers: { authorization: token } }
//       )
//       .then((res) => {
//         console.log(res);
//         localStorage.setItem("token", res.data.token);
//         dispatch({ type: IS_AUTH, payload: true });
//         dispatch({ type: USER_ID, payload: res.data.id });
//         dispatch({ type: USER_NAME, payload: res.data.name });
//         dispatch({ type: USER_SURNAME, payload: res.data.surname });
//         dispatch({ type: USER_EMAIL, payload: res.data.email });
//         dispatch({ type: USER_ROLE, payload: res.data.role });
//         dispatch({ type: USER_GENDER, payload: res.data.gender });
//         dispatch({ type: USER_DATE_OF_BIRTH, payload: res.data.dataOfBirth });
//         dispatch({ type: USER_PHONE, payload: res.data.phone });
//         dispatch({ type: USER_COUNTRY, payload: res.data.country });
//       })
//       .then(
//         (data) => dispatch(requestSuccessUser(data)),
//         (err) => dispatch(requestErrorUser(err))
//       );
//   };
// };

export const fetchSignUp = (user) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(`${API_URL}users/sign_up`, {
        name: user.name,
        surname: user.surname,
        gender: user.gender,
        country: user.country,
        phone_number: user.phone_number,
        email: user.email,
        dateOfBirth: "dvhdvb",
        password: user.password,
      });

      if (result.status === 200) {
        console.log(result.status);
        localStorage.setItem("token", result.data.token);
        dispatch({ type: IS_AUTH, payload: true });
        dispatch({ type: USER_ID, payload: result.data.id });
        dispatch({ type: USER_NAME, payload: result.data.name });
        dispatch({ type: USER_SURNAME, payload: result.data.surname });
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
        alert(`${user.email} is already in use, please try another email`)
      );
    }
  };
};

export const fetchLogin = (user) => {
  return async(dispatch) => {
    try {
      const result = await axios.post(`${API_URL}users/sign_in`, {
        email: user.email,
        password: user.password,
      });

      if (result.status === 200) {
        localStorage.setItem("token", result.data.token);
        dispatch({ type: IS_AUTH, payload: true });
        dispatch({ type: USER_ID, payload: result.data.id });
        dispatch({ type: USER_NAME, payload: result.data.name });
        dispatch({ type: USER_SURNAME, payload: result.data.surname });
        dispatch({ type: USER_GENDER, payload: result.data.gender });
        dispatch({ type: USER_COUNTRY, payload: result.data.country });
        dispatch({
          type: USER_DATE_OF_BIRTH,
          payload: result.data.dateOfBirth,
        });
        dispatch({ type: USER_PHONE, payload: result.data.phone });
        dispatch({ type: USER_EMAIL, payload: result.data.email });
        dispatch({ type: USER_IS_ADMIN, payload: result.data.isAdmin });
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

// export const fetchDelete = (token) => {
//   return (dispatch) => {
//     dispatch(requestUser());
//     axios
//       .post(
//         `${API_URL}users/deleteAccount`,
//         {},
//         { headers: { authorization: token } }
//       )
//       .then((res) => {
//         localStorage.clear();
//         dispatch({ type: IS_AUTH, payload: false });
//         dispatch({ type: CLEAR_USER });
//         dispatch(alert("Account has been deleted!"));
//       })
//       .then(
//         (data) => dispatch(requestSuccessUser(data)),
//         (err) =>
//           dispatch(requestErrorUser(err, "Error! Account has not been deleted"))
//       );
//   };
// };

// export const fetchChange = (user) => {
//   return (dispatch) => {
//     dispatch(requestUser());
//     axios
//       .post(`${API_URL}users/changeProfile`, {
//         id: user.id,
//         name: user.name,
//         surname: user.surname,
//         gender: user.gender,
//         dateOfBirth: user.dateOfBirth,
//         country: user.country,
//       })
//       .then((res) => {
//         if (res.data.error) dispatch({ type: ERROR, payload: res.data.error });
//         else {
//           localStorage.setItem("token", res.data.token);
//           dispatch({ type: CHANGE, payload: true });
//         }
//         dispatch(alert("Success!"));
//       })
//       .then(
//         (data) => dispatch(requestSuccessUser(data)),
//         (err) => dispatch(requestErrorUser(err, "User not found"))
//       );
//   };
// };

// export const fetchChangeEmail = (user) => {
//   return (dispatch) => {
//     dispatch(requestUser());
//     axios
//       .post(`${API_URL}users/changeEmail`, {
//         id: user.id,
//         email: user.email,
//       })
//       .then((res) => {
//         if (res.data.error) dispatch({ type: ERROR, payload: res.data.error });
//         else {
//           localStorage.setItem("token", res.data.token);
//           dispatch({ type: CHANGE, payload: true });
//         }
//         dispatch(alert("Success!"));
//       })
//       .then(
//         (data) => dispatch(requestSuccessUser(data)),
//         (err) => dispatch(requestErrorUser(err, "User not found"))
//       );
//   };
// };

// export const fetchChangePhone = (user) => {
//   return (dispatch) => {
//     dispatch(requestUser());
//     axios
//       .post(`${API_URL}users/changePhone`, {
//         id: user.id,
//         phone: user.phone,
//       })
//       .then((res) => {
//         if (res.data.error) dispatch({ type: ERROR, payload: res.data.error });
//         else {
//           dispatch({ type: CHANGE, payload: true });
//         }
//         dispatch(alert("Success!"));
//       })
//       .then(
//         (data) => dispatch(requestSuccessUser(data)),
//         (err) => dispatch(requestErrorUser(err, "User not found"))
//       );
//   };
// };

// export const fetchChangePass = (id, password) => {
//   return (dispatch) => {
//     dispatch(requestUser());
//     axios
//       .post(`${API_URL}users/pass`, {
//         id: id,
//         password: password,
//       })
//       .then((res) => {
//         console.log("res.data.flag ", res.data.flag);
//         dispatch({ type: FLAG, payload: res.data.flag });

//         dispatch(alert("Success!"));
//       })
//       .then(
//         (data) => dispatch(requestSuccessUserPass(data)),
//         (err) => dispatch(requestErrorUserPass(err))
//       );
//   };
// };

// export const fetchChangePassword = (user) => {
//   return (dispatch) => {
//     dispatch(requestUser());
//     axios
//       .post(`${API_URL}users/changePassword`, {
//         id: user.id,
//         password: user.password,
//       })
//       .then((res) => {
//         if (res.data.error) dispatch({ type: ERROR, payload: res.data.error });
//         else {
//           localStorage.setItem("token", res.data.token);
//           dispatch({ type: CHANGE, payload: true });
//         }
//         // dispatch(alert("Success!"));
//       })
//       .then(
//         (data) => dispatch(requestSuccessUser(data)),
//         (err) => dispatch(requestErrorUser(err, "User not found"))
//       );
//   };
// };
