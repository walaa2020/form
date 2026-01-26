import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
const savedData=localStorage.getItem("form");
const initialState = { savedInfo: savedData ? JSON.parse(savedData) : null }
const dataSlice = createSlice({
    name: "info",
    initialState,
    reducers: {
        continueFun:(state,action)=>{
 state.savedInfo = action.payload;
        },
        saveFun: (state, action) => {
           state.savedInfo = action.payload;
  localStorage.setItem("form", JSON.stringify(action.payload));
        },
        saveCookies: (state, actions) => {
            Cookies.set("form", JSON.stringify(actions.payload), { expires: 3 });
        }

    },
});
export const { saveFun, saveCookies ,continueFun} = dataSlice.actions;
export default dataSlice.reducer;