import React from "react";
import "./skillInfoCard.scss";

const SkillInfoCard = ({heading, skills}) => {
    return (
        <div className="skillInfoCard">
            <h6>{heading}</h6>

            <div className="skillInfoContent">
                {skills.map((item, index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <div className="skillInfo">
                            <p>{item.skill}</p>
                            <p className="percentage">{item.percentage}</p>
                        </div>

                        <div className="skillProgressBg">
                            <div className="skillProgress" style={{width: item.percentage}}></div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default SkillInfoCard