import React from "react";
import { Router } from "../src/route/Router"
import { Header } from "../src/components/Header/Header"
import { BrowserRouter } from "react-router-dom"


function App() {
  return (
    <div >
      <BrowserRouter>
        <Header/>
        <Router />
      </BrowserRouter>
    </div >
  );
}

export default App;
