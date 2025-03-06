import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, message: "New task added!", isRead: false },
  { id: 2, message: "Deadline approaching.", isRead: false },
];

const notificationSlice = createSlice({
  name: "notifications",
  initialState: initialState,
  reducers: {
    addNotification: (state, action) => {
      state.push(action.payload);
    },
    markAsRead: (state, action) => {
      return state.map((notif) =>
        notif.id === action.payload ? { ...notif, isRead: true } : notif
      );
    },
  },
});

export const { addNotification, markAsRead } = notificationSlice.actions;
export default notificationSlice.reducer;
