import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;

export default store;