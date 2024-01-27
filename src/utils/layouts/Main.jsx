import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Hero } from "../../components/index";
import "./Main.css";

function Main() {
  return (
    <div className="app flex">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-hero">
        <Hero />
      </div>
      <div className="app-main-content">
        <Outlet />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Main;
