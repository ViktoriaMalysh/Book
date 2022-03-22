import {
  SHOW_SALE,
  BOOK,
  CANCEL,
  SHOW_MY_BOOKED_ROOMS,
  SHOW_MY_BOUGHT_ROOMS,
  SHOW_ROOMS,
  SHOW,
} from "./types";

const initialState = {
  book: false,
  cancel: false,
  show: false,
  showSale: [{}],
  showMyBookedRooms: [{}],
  showMyBoughtRooms: [{}],
  showRooms: [{}],
};

export const reducerTickets = (state = initialState, action) => {
  switch (action.type) {
    case BOOK:
      return { ...state, book: action.payload };
    case CANCEL:
      return { ...state, cancel: action.payload };
    case SHOW_MY_BOOKED_ROOMS:
      return { ...state, showMyBookedRooms: action.payload };
    case SHOW_MY_BOUGHT_ROOMS:
      return { ...state, showMyBoughtRooms: action.payload };
    case SHOW_SALE:
      return { ...state, showSale: action.payload };
    case SHOW_ROOMS:
      return { ...state, showRooms: action.payload };
    case SHOW:
      return { ...state, show: action.payload };

    default:
      return state;
  }
};
