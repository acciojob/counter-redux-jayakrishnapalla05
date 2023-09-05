import React from "react";
import { INCREMENT,DECREMENT } from "./actionTypes";


export const increment=()=>{
    return {
        type:INCREMENT;
  }
}
export const DECREMENT=()=>{
    return {
        type:DECREMENT;
  }
}
