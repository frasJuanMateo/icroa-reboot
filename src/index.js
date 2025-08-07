import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main.jsx";
import Organizers from "./Organizers.jsx";
import Guests from "./Guests.jsx";
import reportWebVitals from "./reportWebVitals";
import Teams from "./Teams.jsx";
import Navbar from "./components/NavBar";
import Footer from "./components/Foot";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/organizers" element={<Organizers />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="organizers/teams" element={<Teams />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
