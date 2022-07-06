import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://github.com/NoobieDev97"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/monish-b-201297/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/NoobieDev97"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
