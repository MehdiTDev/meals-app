import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [], // Initial state for favorite meal IDs
  },
  reducers: {
    // Corrected the typo here
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id); // Adds the favorite meal ID
    },
    removeFavorite: (state, action) => {
      const index = state.ids.indexOf(action.payload.id); // Find index of the ID
      if (index > -1) {
        state.ids.splice(index, 1); // Remove the ID if it exists
      }
    },
  },
});

// Export actions
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

// Export reducer
export default favoritesSlice.reducer;
