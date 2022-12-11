import { createSlice, createAsyncThunk, current, nanoid } from "@reduxjs/toolkit";


const initialState = {
    userInfo: {
        id: "",
        timestamp: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        rank: {teacher: false, student: false, admin: false},
        dob: ""
    },
    loggedIn: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logInReducer: (state, action) => {
            state.loggedIn = !state.loggedIn;
        }
    }
});


export const {logInReducer} = userSlice.actions;
export default userSlice.reducer;