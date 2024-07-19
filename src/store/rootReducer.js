import { combineReducers } from "@reduxjs/toolkit";
import countReducer from './countSlice'

const rootReducer = combineReducers ({
    count: countReducer,
})


export default rootReducer