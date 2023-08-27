import React from "react";
import vg from "../assets/vg.png";
import { motion } from "framer-motion";

const Contact = () => {
  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.3,
      },
    },
  };

  return (
    <div id="contact">
      <section>
        <motion.form {...animations.form}>
          <h2>Contact Me</h2>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Message" required />
          <motion.button type="submit" {...animations.button}>
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Hello Image" />
      </aside>
    </div>
  );
};

export default Contact;
