import React from "react";
import Profile from "../component/Profile";
import Nav from "../component/Nav";
import Search from "../component/Search";
import Subject from "../component/Subject";
import "./Main.css";

const Main = () => {
  return (
    <div className="main_body">
      <main className="main_container">
        <Nav />
        <Search />
        <div className="main_contents">
          <Profile />
          <Subject />
        </div>
      </main>
    </div>
  );
};

export default Main;
