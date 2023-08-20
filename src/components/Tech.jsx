import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tech Stack</p>
        <h2 className={styles.sectionHeadText}>
          Technologies I have worked with.
        </h2>
      </motion.div>
      {technologies.map((technology) => (
        <div className="w-28 h-28 " key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="text-center">{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
