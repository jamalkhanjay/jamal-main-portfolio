import React, { useRef, useState } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/my-logo.png";

const Home = () => {
  const projectsCount = useRef(null);

  // Animation of counting the Projects value
  const animationProjectsCount = () => {
    animate(0, 10, {
      duration: 2,
      onUpdate: (val) => (projectsCount.current.textContent = val.toFixed()),
    });
  };

  const animation = {
    h1: {
      initial: {
        x: -100,
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi I'm <br />
            Jamal Khan
          </motion.h1>
          <Typewriter
            options={{
              strings: [
                "Front-End Developer",
                "ReactJS Developer",
                "MERN Stack Developer",
              ],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
              delay: 30,
              deleteSpeed: 20,
            }}
          />

          <div>
            <a href="mailto:jamalkhanwaxir@gmail.com">Hire Me</a>
            <a href="#projects">
              Projects
              <BsArrowUpRight />
            </a>
          </div>

          <article data-special>
            <p>Contact</p>
            <span>jamalkhanwaxir@gmail.com</span>
          </article>

          <aside>
            <article>
              <p>
                <motion.span
                  whileInView={animationProjectsCount}
                  ref={projectsCount}
                ></motion.span>
              </p>
              <span>Projects Done</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Jamal" />
      </section>
      <a href="#projects">
        <BsChevronDown />
      </a>
    </div>
  );
};

export default Home;
