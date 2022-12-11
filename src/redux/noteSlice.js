import {createSlice, createAsyncThunk, current, nanoid } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";



const initialState = {
    noteInfo: {
        id: "",
        timestamp: "",
        studentId: "",
        teacherId: "",
        noteContent: ""
    },
    loaded: false,
    renderNote: false
};


const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        renderNoteReducer: (state, action) => {
            state.renderNote = !state.renderNote;
        }
    }
})


export const {renderNoteReducer} = noteSlice.actions;
export default noteSlice.reducer;