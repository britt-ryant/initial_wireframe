import { createSlice, createAsyncThunk, nanoid, current } from "@reduxjs/toolkit";

const initialState = {
    classInfo: {
        id: "",
        timestamp: "",
        teacherId: "",
        title: "",
    },
    renderClassInfo: false,
};


const classSlice = createSlice({
    name: "class",
    initialState,
    reducers: {
        renderClassReducer: (state, action) => {
            state.renderClassInfo = !state.renderClassInfo;
        }
    }
});

export const {renderClassReducer} = classSlice.actions;
export default classSlice.reducer;
