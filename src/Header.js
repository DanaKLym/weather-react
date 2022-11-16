import React from "react";
import MainCity from "./MainCity";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <form className="search">
        <input
          type="text"
          placeholder="search"
          autoFocus
          autoComplete="off"
          className="search-input"
          id="city-search"
        />
        <input type="submit" value="Go!" className="upperBtn" />
        <button className="upperBtn" id="location-button">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/048/106/original/home.png?1665489684"
            alt="current location"
            width="15px"
          />
        </button>
      </form>
      <MainCity />
    </header>
  );
}
