import { SHOW_TEAM } from "./types";

const initialState = {
  showTeam: [{}],
};

export const reducerTeam = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TEAM:
      return { ...state, showTeam: action.payload };

    default:
      return state;
  }
};
