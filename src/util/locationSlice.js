import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    locationId: "ChIJLbZ-NFv9DDkRzk0gTkm3wlI",
    locationLatLng: {
      lat: 28.6139391,
      lng: 77.2090212,
    },
  },
  reducers: {
    addLocationId: (state, action) => {
      state.locationId = action.payload;
    },
    addLocationLatLng: (state, action) => {
      state.locationLatLng = action.payload;
    },
  },
});

export const { addLocationId, addLocationLatLng } = locationSlice.actions;

export default locationSlice.reducer;
