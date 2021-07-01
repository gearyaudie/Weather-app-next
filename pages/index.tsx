import React, { useState } from "react";
import { WeatherComponent } from "../components/WeatherComponent";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="background">
        <WeatherComponent />
      </div>
    </Provider>
  );
}
