import React from "react";
import "./Profile.css";


const data = [
  {
    id: 1,
    name: "박성길",
    jobtitle: "ceo",
  },
  { id: 2, name: "김시은", jobtitle: "선임" },
];
const Profile = () => {
  return (
    <aside className="profile_container">
      <img
        className="profileimg"
        src="image/Rectangle2762.png"
        alt="프로필 이미지"
      />
      <p className="profilename">{data[0].name}</p>
      <p className="profilerole">개발팀 차장</p>
      <p className="profilejob">프론트개발 엔지니어</p>
      <style jsx>{`
        .border {
          border: 1px #dfdfdf;
        }
      `}</style>
    </aside>
  );
};

export default Profile;
