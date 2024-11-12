import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteList: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const truckId = action.payload;

      if (state.favoriteList.includes(truckId)) {
        state.favoriteList = state.favoriteList.filter((id) => id !== truckId);
      } else {
        state.favoriteList.push(truckId);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export const selectFavoriteList = (state) => state.favorite.favoriteList;

export default favoriteSlice.reducer;
