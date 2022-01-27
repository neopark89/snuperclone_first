import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header_container">
      <header className="top_left">
        <a href="/">
          <img
            className="headerBar_logo"
            src="image/snuPer21481.png"
            alt="기업로고"
          />
        </a>
        <nav className="headerBar_menu">
          <a href="/">대시보드</a>
          <a href="/">과제</a>
          <a href="/">요청</a>
          <a href="/">일정</a>
          <a href="/">리포트</a>
          <a href="/">인사이트</a>
        </nav>
      </header>
      <header className="top_right">
        <div className="headerBar_icon">
          <a href="/">
            <img src="image/search20279.png" alt="검색" />
          </a>
          <a href="/">
            <img src="image/alert20490.png" alt="알럿" />
          </a>
          <a href="/">
            <img src="image/member11722.png" alt="멤버" />
          </a>
        </div>
        <div className="wsLogo">
          <a href="/">
            <img src="image/workspace14823.png" alt="워크스페이스" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
