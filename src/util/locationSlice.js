import {createSlice} from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: 'location',
    initialState: {
        location: "ChIJLbZ-NFv9DDkRzk0gTkm3wlI",
        locationLatLng: {
         lat: 12,
         lng: 44
        }
    },
    reducers: {
       addLocation: (state, action) => {
            state.location = action.payload
       },
       addLocationLatLng: (state, action) => {
          state.locationLatLng = action.payload
        //   state.locationLatLng.lng = action.payload
       },

    }
    
})

export const {addLocation, addLocationLatLng} = locationSlice.actions;

export default locationSlice.reducer;