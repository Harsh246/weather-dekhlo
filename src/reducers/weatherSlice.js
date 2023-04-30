import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: null,
  weatherDetails: null,
  loading: false,
  isCelsius: true,
  searchHistory: [],
  backgroundImage: null,
  mainBackground: "/images/main2.jpg",
};

const weatherSlice = createSlice({
  name: "weather",

  initialState,
  reducers: {
    updateLocation: (state, action) => {
      let { location } = action?.payload;

      if (location) state.location = location;
      else {
        if ("permissions" in navigator) {
          navigator.permissions
            .query({ name: "geolocation" })
            .then((permissionStatus) => {
              if (permissionStatus.state === "granted") {
                console.log("Location permission is already granted");
                navigator.geolocation.getCurrentPosition(function (position) {
                  console.log("Latitude: " + position.coords.latitude);
                  console.log("Longitude: " + position.coords.longitude);

                  location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                  };
                });
              } else {
                console.log("Location permission is not granted");
                navigator.geolocation.getCurrentPosition(
                  function (position) {
                    console.log("position: ", position);
                    console.log("Location permission has been granted");
                    location = {
                      latitude: position.coords.latitude,
                      longitude: position.coords.longitude,
                    };
                  },
                  function () {
                    console.log("Location permission has been denied");
                    location = {
                      latitude: 28.6448,
                      longitude: 77.2167,
                    };
                  }
                );
              }
            });
        }
        state.location = location;
      }
    },
    fetchWeatherDetails: (state, params) => {},
    toggleCelsius: (state, params) => {},
    setLoading: (state, params) => {},
    updateHistory: (state, params) => {},
    updateBackground: (state, params) => {
      const hours = new Date().getHours();
      const isDayTime = hours > 6 && hours < 20;

      state.mainBackground = isDayTime
        ? "/images/day.jpg"
        : "/images/night.jpg";
    },
  },
});

const { actions, reducer } = weatherSlice;

export const {
  updateLocation,
  fetchWeatherDetails,
  toggleCelsius,
  setLoading,
  updateHistory,
  updateBackground,
} = actions;
export default reducer;
