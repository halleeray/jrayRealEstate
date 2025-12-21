import React from "react";
import { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import "../assets/css/MainContent.css";
import ContactInfo from "./ContactInfo";

interface Props {
  bgimages: string[];
  header: string;
}

function MainContent({ bgimages, header }: Props) {
  const handleSearch = (query: string) => {
    console.log("Searching for:", { query });
  };

  return (
    <div className="main-container">
      <div className="inner-container">
        <div className="header">{header}</div>
        <div className="searchBar">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="contactInfo">
          <ContactInfo />
        </div>
      </div>

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
