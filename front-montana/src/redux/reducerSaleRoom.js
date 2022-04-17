import { ROOM_DATA, SHOW_MODAL } from "./types";

const initialState = {
  show: false,
  roomData: {},
};

export const reducerSaleRoom = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, show: action.payload };
    case ROOM_DATA:
      return { ...state, roomData: action.payload };

    default:
      return state;
  }
};
