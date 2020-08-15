import { StatusBar } from "expo-status-bar";
import React from "react";
import Navigation from "./src/navigation/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
};

export default App;
