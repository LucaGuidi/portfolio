import { Gradient } from "../Shared";
import "./experience.scss";

import { EXPERIENCE } from "../../configs/constants";

export function Experience() {
  return (
    <div className="exp-container">
      <div className="col-lg-4 col-12">
        <div className="content">
          <h1>
            <Gradient>Experience</Gradient>
          </h1>

          <div className="text mt-5">
            {EXPERIENCE.map((experienceNode) => (
              <ul className="list mb-5" key={experienceNode.info}>
                <h5>{experienceNode.title}</h5>
                <i>{experienceNode.info}</i>

                {experienceNode.description.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
