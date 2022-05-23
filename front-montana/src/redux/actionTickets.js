import axios from "axios";
import { API_URL } from "../config";
import {
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
  SHOW_SALE,
  BOOK,
  CANCEL,
  SHOW_MY_BOOKED_ROOMS,
  SHOW_MY_BOUGHT_ROOMS,
  SHOW_ROOMS,
  SHOW,
} from "./types";

export const alert = (message) => {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: message });
    setTimeout(() => {
      dispatch({ type: SHOW_ALERT, payload: false });
    }, 1200);
  };
};

export const bookRoom = (id, name, address, locality, price, url) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(`${API_URL}rooms/booking_room`, {
        id: id,
        name: name,
        address: address,
        locality: locality,
        price: price,
        url: url,
        status: "booked",
      });
      if (result.status === 200) {
        dispatch(alert(result.data.message));
        dispatch({ type: BOOK, payload: result.data.book });
      }
    } catch (err) {
      console.log("Error", err);
      dispatch(alert("Hotel room not booked"));
    }
  };
};

export const cancelBook = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(`${API_URL}rooms/cancel_book`, {
        id: id,
      });
      if (result.status === 200) {
        dispatch({ type: CANCEL, payload: result.data.cancel });
        dispatch(alert(result.data.message));
      }
    } catch (err) {
      console.log("Error", err);
      dispatch(alert("Room reservation wasn`t canceled!"));
    }
  };
};

export const showRooms = (options) => {
  return async (dispatch) => {
    try {
      const result = await axios.request(options);
      if (result.status === 200) {
        dispatch({
          type: SHOW_ROOMS,
          payload: result.data.data.body.searchResults.results,
        });
        // dispatch({ type: SHOW, payload: true });
        // dispatch({ type: SHOW_LOADER }),
        //   setTimeout(() => {
        //     dispatch({ type: HIDE_LOADER });
        //   }, 300);
      }
    } catch (err) {
      console.log("Error", err);
    }
  };
};

export const showMyRoomsWithStatus = (id, status) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(`${API_URL}rooms/show_my_rooms`, {
        id: id,
        status: status,
      });
      if (result.status === 200) {
        if (status === "booked") {
          dispatch({ type: SHOW_MY_BOOKED_ROOMS, payload: result.data });
        } else if (status === "bought") {
          dispatch({ type: SHOW_MY_BOUGHT_ROOMS, payload: result.data });
        }
        // dispatch({ type: SHOW_LOADER }),
        //   setTimeout(() => {
        //     dispatch({ type: HIDE_LOADER });
        //   }, 300);
      }
    } catch (err) {
      console.log("Error", err);
      dispatch(alert(`You do not have any ${status} rooms`));
    }
  };
};

export const showSaleRooms = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(`${API_URL}rooms/show_sale`);
      if (result.status === 200) {
        console.log(result)
        dispatch({ type: SHOW_SALE, payload: result.data });
      }
    } catch (err) {
      console.log("Error1", err);
      dispatch(alert("No any promotional offers"));
    }
  };
};
   