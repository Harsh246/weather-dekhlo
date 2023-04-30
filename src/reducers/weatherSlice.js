import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  weatherDetails: null,
  loading: false,
  isCelsius: true,
  searchHistory: [],
  backgroundImage: null,
};

const weatherSlice = createSlice({
  name: "weather",

  initialState: {},
  reducers: {
    updateLocation: (state, params) => {},
    fetchWeatherDetails: (state, params) => {},
    toggleCelsius: (state, params) => {},
    setLoading: (state, params) => {},
    updateHistory: (state, params) => {},
  },
});

const { actions, reducer } = weatherSlice;

export const { save } = actions;
export default reducer;
