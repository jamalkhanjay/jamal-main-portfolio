import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/49797069?s=400&v=4"}
          alt="Founder"
        />

        <h2>M. Jamal Khan</h2>
        <p>© {currentYear} Jamal, Inc. All rights reserved.
</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://github.com/JamalKhanWazir" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://instagram.com/jamalkhan_jk_official" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://linkedin.com/in/jamal-khan-jay/" target={"blank"}>
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
