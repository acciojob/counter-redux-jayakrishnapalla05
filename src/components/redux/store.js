import { createStoreHook } from "react-redux";
import { myReducer } from "./reducer/myReducer";
import { createStore } from "redux";


export const store=createStore(myReducer);