import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    editItem: (state, action) => {
      const { id, text } = action.payload;
      const ei = state.find((item) => item.id == id);
      if (ei) {
        (ei.id = parseInt(id)), (ei.text = text);
      }
    },
    deleteList: (state, action) => {
      const { id } = action.payload;
      return state.filter((f) => f.id !== id);
    }
  }
});

export const { addTodo, editItem, deleteList } = todoSlice.actions;
export default todoSlice.reducer;
