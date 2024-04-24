import { motion } from "framer-motion";
import { Gradient } from "../Shared";

import "./home.scss";

const MAXIM = "</ Changing the world one commit at time >";

const variants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export function Home() {
  if (window.innerWidth < 800) {
    return (
      <div className="home-container">
        <h4>{MAXIM}</h4>
        <h1>
          Hi, I'm <Gradient>Luca</Gradient> Guidi
        </h1>
        <h2>
          <Gradient>Front-End Developer At</Gradient> Engineering
        </h2>
      </div>
    );
  }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="home-container"
    >
      <motion.h4 variants={variants}>{MAXIM}</motion.h4>
      <motion.h1 variants={variants} className="mt-5">
        Hi, I'm <Gradient>Luca</Gradient> Guidi
      </motion.h1>
      <motion.h2 variants={variants}>
        <Gradient>Front-End Developer At</Gradient> Engineering
      </motion.h2>
    </motion.div>
  );
}
