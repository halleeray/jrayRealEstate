import React from "react";
import { useState, useEffect, useRef } from "react";
import "./MainContent.css";

interface Props {
  bgimages: string[];
  header: string;
}

function MainContent({ bgimages, header }: Props) {
  

  return (
    <div className="main-container">
      <div className="header">{header}</div>

      {/* <form onSubmit={handleSubmit}>
        <div>
          <input id="locationInput" type="text">
            Search
          </input>
        </div>
        <button type="submit">Search</button>
      </form> */}

      <div className="bg-wrapper">
        {bgimages.map((src, i) => (
          <div
            key={src}
            className="bg-slide"
            style={{
              backgroundImage: `url(${src})`,
              animationDelay: `${i * 8}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default MainContent;
