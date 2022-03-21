import {
  IS_AUTH,
  USER_EMAIL,
  USER_PASSWORD,
  USER_IS_ADMIN,
  USER_ID,
  CLEAR_USER,
  SUCCESS,
  USER_GENDER,
  USER_COUNTRY,
  USER_PHONE,
  COUNT_HOTEL_TICKET,
  USER_DATE_OF_BIRTH,
  CURRENT_PRICE,
  USER_FIRST_NAME,
  USER_LAST_NAME,
  UPDATE,
  VALIDATE,
  DELETE,
} from "./types";

const initialState = {
  isAuth: false,
  userId: 0,
  userFirstName: "",
  userLastName: "",
  userGender: "",
  userCountry: "",
  userDateOfBirth: "",
  userPhone: 0,
  userEmail: "",
  userPassword: "",
  isAdmin: false,
  currentPrice: 0,
  validate: "",
  success: false,
  update: false,
  delete: false,
  countHotelTickets: 0,
};

export const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTH:
      return { ...state, isAuth: action.payload };
    case USER_ID:
      return { ...state, userId: action.payload };
    case USER_FIRST_NAME:
      return { ...state, userFirstName: action.payload };
    case USER_LAST_NAME:
      return { ...state, userLastName: action.payload };
    case USER_GENDER:
      return { ...state, userGender: action.payload };
    case USER_DATE_OF_BIRTH:
      return { ...state, userDateOfBirth: action.payload };
    case USER_COUNTRY:
      return { ...state, userCountry: action.payload };
    case USER_PHONE:
      return { ...state, userPhone: action.payload };
    case COUNT_HOTEL_TICKET:
      return { ...state, countHotelTickets: action.payload };
    case USER_EMAIL:
      return { ...state, userEmail: action.payload };
    case USER_PASSWORD:
      return { ...state, userPassword: action.payload };
    case USER_IS_ADMIN:
      return { ...state, isAdmin: action.payload };
    case CURRENT_PRICE:
      return { ...state, currentPrice: action.payload };
    case CLEAR_USER:
      return initialState;
    case SUCCESS:
      return { ...state, success: action.payload };
    case UPDATE:
      return { ...state, update: action.payload };
    case VALIDATE:
      return { ...state, validate: action.payload };
    case DELETE:
      return { ...state, delete: action.payload };

    default:
      return state;
  }
};
