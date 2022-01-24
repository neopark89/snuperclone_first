import React from "react";
import './Search.css';

const Search = () => {
  return (
    <div className="search_container">
      <input type="search" placeholder="이름을 검색"></input>
      <ul className="main_team">
        <li>
          <a href="/">팀</a>
        </li>
        <li>|</li>
        <li>
          <a href="/">멤버</a>
        </li>
      </ul>
    </div>
  );
};

export default Search;
