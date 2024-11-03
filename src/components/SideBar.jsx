import React from "react";

export default function SideBar({handleToggleSideBar, data}) {
  return (
    <div className="sideBar">
      <div className="bgOverlay"></div>
      <div className="sideBarContent">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>
            {data?.explanation}
          </p>
        </div>
        <button>
          <i className="fa-solid fa-forward" onClick={handleToggleSideBar}></i>
        </button>
      </div>
    </div>
  );
}
