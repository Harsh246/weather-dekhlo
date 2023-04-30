import React from "react";

export default function WeatherContainer() {
  return (
    <div className="h-[80vh] w-3/4  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex flex-col justify-center items-center gap-2">
      <div className="w-3/6 max-h-32 object-contain flex justify-center">
        <img src="/images/animation.gif" className="h-full w-auto " />
      </div>
      <p className="text-4xl">What's the weather?</p>

      <div className="w-3/6 max-h-32 object-contain flex justify-center items-center gap-4">
        <p className="text-xl">Detecting Location</p>

        <div
          className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
}
