import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    employees: [],
}

/**
 * reducer
 *
 * @type {Slice<{employees: *[]}, {deleteEmployee: reducers.deleteEmployee, addEmployee: reducers.addEmployee}, string, string, SliceSelectors<{employees: *[]}>>}
 */
export const employeesSlice = createSlice({
    name: "employees",
    initialState,

    reducers: {
        addEmployee: (state, action) => {
            state.employees = [...state.employees, action.payload]
        },
        deleteEmployee: (state, action) => {
            state.employees = state.employees.filter((employee) => employee.id !== action.payload);
        },
    },
});

export const { addEmployee, deleteEmployee,} = employeesSlice.actions;
export default employeesSlice.reducer;
