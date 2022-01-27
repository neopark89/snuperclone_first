import React from "react";
import { useState} from 'react';
import dummy from "../DB/data.json";
import './Search.css';

const Search = () => {


  return (
    <div className="search_container">
      <input type="search" placeholder="이름을 검색" ></input>
      <ul className="main_team">
        <li>
          <a href="/">팀</a>
        </li>
        <li>|</li>
        <li>
          <a href="/">멤버</a>
        </li>
      </ul>
      <div className="search_box">
        <p>나의 팀</p>
        <ul className="box_list">
          {dummy.names.map(name => 
          <li key={name.id }>
            <img src="image/Rectangle2762.png" alt="팀원1" />
            {name.name}&nbsp;/&nbsp;{name.grade}&nbsp;&#183;&nbsp;{name.role}
            </li>)}
        </ul>
      </div>
    </div>
  );
};

export default Search;
