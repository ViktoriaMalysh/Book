import { combineReducers } from "redux";
import { reducerApp } from "./reducerApp";
import { reducerTickets } from "./reducerTickets";
import { reducerUsers } from "./reducerUsers";
import { reducerAdmin } from "./reducerAdmin";
import { reducerSaleRoom } from "./reducerSaleRoom";
import { reducerTeam } from "./reducerTeam";


export const rootReducers = combineReducers({
  tickets: reducerTickets,
  saleRoom: reducerSaleRoom,
  users: reducerUsers,
  admin: reducerAdmin,
  app: reducerApp,
  team: reducerTeam,
});



