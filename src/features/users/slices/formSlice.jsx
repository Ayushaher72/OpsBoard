// src/features/form/formSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormData: (state, action) => {
      state.data.push(action.payload); // Add new form entry
    },
  },
});

export const { addFormData } = formSlice.actions;
export default formSlice.reducer;
