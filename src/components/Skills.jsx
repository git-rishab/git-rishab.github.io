import React from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Skills = () => {
  return (
    <div>
      <div className={`${styles.sectionHeadText} text-center`}>Skills</div>
      <div className='flex flex-row flex-wrap justify-center gap-10  p-10 rounded-xl'>

        {technologies.map((technology) => (
          <div className='w-28 h-28 skills-card-img' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <div className="text-center skills-card-name">{technology.name}</div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
