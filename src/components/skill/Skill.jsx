import { useState } from "react"
import { SKILL } from "../../utils/data"
import "./skill.scss"
import SkillCard from "./skillCard/SkillCard"
import SkillInfoCard from "./skillInfoCard/SkillInfoCard"

const Skill = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILL[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    }

    return (
        
        <div className="skillContainer">
            <div className="title">
                <h5>Technical Proficiency</h5>
            </div>
            <div className="skillContent">
                <div className="skill">
                    {SKILL.map((item) => (
                        <SkillCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={()=> {
                                handleSelectSkill(item);
                            }}
                        />
                    ))}
                </div>

                <div className="skillInfo">
                    <SkillInfoCard
                        heading = {selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </div>
            </div>
        </div>
    )
}

export default Skill