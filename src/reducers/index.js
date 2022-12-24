import { combineReducers } from "redux";

import addtocart from "./addtocart";
import detailes from "./detailes"
import allbooks from "./allbooks"

const rootReducers = combineReducers({ addtocart, detailes, allbooks })


export default rootReducers