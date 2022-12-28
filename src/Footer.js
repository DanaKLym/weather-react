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
        href="https://bohdanaklymenko.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="personalWebsiteLink"
        title="Personal website"
      >Bohdana Klymenko</a>
    </footer>
  );
}