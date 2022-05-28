import {
  SHOW_SALE,
  BOOK,
  CANCEL,
  SHOW_MY_BOOKED_ROOMS,
  SHOW_MY_BOUGHT_ROOMS,
  SHOW_ROOMS,
  SHOW,
  DAYS,
  NIGHTS,
  SHOW_SINGLE_ROOMS,
} from "./types";

const initialState = {
  book: false,
  cancel: false,
  show: false,
  showSale: [{}],
  showMyBookedRooms: [{}],
  showMyBoughtRooms: [{}],
  showRooms: [{}],
  days: 7,
  nights: 6,
  showSingleRoom: [],
};

export const reducerTickets = (state = initialState, action) => {
  switch (action.type) {
    case BOOK:
      return { ...state, book: action.payload };
    case SHOW_SINGLE_ROOMS:
      return { ...state, showSingleRoom: action.payload };

    case CANCEL:
      return { ...state, cancel: action.payload };
    case DAYS:
      return { ...state, days: action.payload };
    case NIGHTS:
      return { ...state, nights: action.payload };
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
