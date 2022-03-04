import { combineReducers } from "redux";
import { reducerApp } from "./reducerApp";
import { reducerTickets } from "./reducerTickets";
import { reducerUsers } from "./reducerUsers";
import { reducerAdmin } from "./reducerAdmin";

export const rootReducers = combineReducers({
  tickets: reducerTickets,
  users: reducerUsers,
  admin: reducerAdmin,
  app: reducerApp,
});



