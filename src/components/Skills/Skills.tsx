import "./skills.scss";
import { SKILLS } from "../../configs/constants";

export function Skills() {
  return (
    <div className="skills">
      {SKILLS.map((skill) => (
        <div className="skill-container" key={skill.name}>
          <img src={skill.src} alt={skill.name} />
          <h4>{skill.name}</h4>
        </div>
      ))}
    </div>
  );
}
