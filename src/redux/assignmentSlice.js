import { createSlice, createAsyncThunk, current, nanoid } from "@reduxjs/toolkit";



const initialState={
    assignmentInfo: {
        id:"",
        timestamp: "",
        classId: "",
        notes: []
    },
    renderAssignment: false,
    assignmentList: []
}


const assignmentSlice = createSlice({
    name: "assignment",
    initialState,
    reducers: {
        renderAssignmentReducer: (state, action) => {
            state.renderAssignment = !state.renderAssignment;
        }
    }
});

export const {renderAssignmentReducer} = assignmentSlice.actions;
export default assignmentSlice.reducer;