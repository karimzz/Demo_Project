import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../Slice/Auth/AuthSlice";

const store = configureStore({
    reducer  :{
        AuthSlice
    }
})

export default store ; 