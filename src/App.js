import React from "react";
import "./App.css";
import WeatherContainer from "./components/WeatherContainer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateBackground, updateLocation } from "./reducers/weatherSlice";
function App() {
  const mainBg = useSelector((state) => state.weather.mainBackground);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateBackground());
    dispatch(updateLocation({}));
  }, [dispatch]);

  return (
    <React.Fragment>
      <main
        style={{ backgroundImage: `url(${mainBg})` }}
        className="font-Montserrat h-full w-full flex flex-col justify-center items-center w-screen bg-no-repeat bg-center bg-cover bg-fixed"
      >
        {" "}
        <header className="font-semibold font-Montserrat text-lg fixed top-0 left-0 p-4  ">
          WeatherDekhlo.
        </header>
        <WeatherContainer />
      </main>
    </React.Fragment>
  );
}

export default App;
