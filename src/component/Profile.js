import React from "react";
import "./Profile.css";
import dummy from "../DB/data.json";


const Profile = () => {

  return (
    <aside className="profile_container">
      <img
        className="profile_img"
        src="image/Rectangle2762.png"
        alt="프로필 이미지"
      />
      <p className="profile_name">박성길</p>
      <p className="profile_role">개발팀 차장</p>
      <p className="profile_job">프론트개발 엔지니어</p>
      <style jsx>{`
        .border {
          border: 1px #dfdfdf;
        }
      `}</style>
    </aside>
  );
};

export default Profile;
