import { findByDisplayValue } from "@testing-library/react";
import React from "react";
import "./Subject.css";

const Subject = () => {
  return (
    <div className="insight_container">
      <div className="title">
        <h1>현재 업무가중도</h1>
        <img src="image/info59896.png" alt="title_info" />
      </div>
      <section className="gage_box">
        <article className="box_Left">
          <p className="task">코칭과제</p>
          <div className="gage">
            <img src="image/Gage.Png" alt="업무가중도계기판" />
            <p className="status">매우높음</p>
            <p className="statusP">93%</p>
          </div>
        </article>
        <article className="box_Right">
          <p className="task">셀프과제</p>
          <div className="gage">
            <img src="image/Gage.Png" alt="업무가중도계기판" />
            <p className="status">매우높음</p>
            <p className="statusP">93%</p>
          </div>
        </article>
      </section>
      <div className="title">
        <h1>팀원별 현재 업무가중도</h1>
        <img src="image/info59896.png" alt="title_info" />
      </div>
      <section className="gage_box">
        <article className="box_Left">
          <p className="task">코칭과제</p>
          <div className="gage">
            <img src="image/teamwon.png" alt="팀원별데이터" />

          </div>
        </article>
        <article className="box_Right">
          <p className="task">셀프과제</p>
          <div className="gage">
            <img src="image/teamwon.png" alt="팀원별데이터" />
          </div>
        </article>
      </section>
      <div className="title">
        <h1>최근 6개월 업무가중도 추이</h1>
        <img src="image/info59896.png" alt="title_info" />
      </div>
      <section className="gage_box">
        <article className="box_Left">
          <p className="task">코칭과제</p>
          <div className="gage">
            <img src="image/trend.Png" alt="6개월 트랜드" />
          </div>
        </article>
        <article className="box_Right">
          <p className="task">셀프과제</p>
          <div className="gage">
            <img src="image/trend.Png" alt="6개월 트랜드" />
          </div>
        </article>
      </section>
    </div>
  );
};

export default Subject;
