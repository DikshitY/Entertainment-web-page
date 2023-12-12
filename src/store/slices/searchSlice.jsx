import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "searchTerm",
    initialState: "",
    reducers: {
        changeSearch(state, action){
            return action.payload
        }
    }
})

export const searchReducer = searchSlice.reducer;
export const {changeSearch} = searchSlice.actions;