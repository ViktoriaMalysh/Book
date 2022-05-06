import axios from "axios";
import { API_URL } from "../config";
import { SHOW_TEAM } from "./types";

export const showTeam = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(`${API_URL}team/show_team`);
      if (result.status === 200) {
        console.log(result);
        dispatch({ type: SHOW_TEAM, payload: result.data });
      }
    } catch (err) {
      console.log("Error1", err);
      dispatch(alert("Team is not have any people"));
    }
  };
};
