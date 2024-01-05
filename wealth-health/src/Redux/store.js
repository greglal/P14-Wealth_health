import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from "./Reducers/employeesReducer";

export const store = configureStore( {
    reducer: {
        employees: employeesReducer,
    }
})