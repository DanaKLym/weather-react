import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/DanaKLym/weather-react"
        target="_blank"
        rel="noreferrer"
        className="githubLink"
        title="GitHub repo"
      >
        Open-source code
      </a>{" "}
      by <a
        href="https://www.linkedin.com/in/bohdana-klymenko-254472176/"
        target="_blank"
        rel="noreferrer"
        className="linkedinLink"
        title="LinkedIn profile"
      >Dana</a>
    </footer>
  );
}