import { findByDisplayValue } from "@testing-library/react";
import React from "react";
import "./Subject.css";

const Subject = () => {
  return (
    <div className="insight_container">
      <h1 className="title">현재업무가중도</h1>
      <section className="gage_box">
        <article className="Box_Left">
          <p className="task">코칭과제</p>
          <div>
            <img src="image/Gage.Png" alt="업무가중도계기판" />
          </div>
          <p className="status">매우높음</p>
          <p className="statusP">93%</p>
        </article>
        <article className="box_Right">
          <p className="task">셀프과제</p>
          <img src="image/Gage.Png" alt="업무가중도계기판" />
          <p className="status">매우높음</p>
          <p className="statusP">93%</p>
        </article>
      </section>
    </div>
  );
};

export default Subject;
