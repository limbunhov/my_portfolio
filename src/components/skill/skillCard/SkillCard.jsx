// import React from "react";
import "./skillCard.scss";

const SkillCard = ({title, iconUrl, isActive, onClick}) => {
    return (
        <div
        className={`skillCard ${isActive ? "active" : ""}`}
        onClick={() => onClick()}
        >
            <div className="skillIcon">
                <img src={iconUrl} alt="title" />
            </div>

            <span>{title}</span>
        </div>
    )
}

export default SkillCard