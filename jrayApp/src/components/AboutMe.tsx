import React from "react";
import "../assets/css/AboutMe.css";
import { useState } from "react";

function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const alwaysDisplayed =
    "Introducing Julie Ray, an exceptional real estate agent who has made waves in the industry. Her success story began with the acquisition of a Winter Park real estate company in 1997. She later merged with Century 21, resulting in the creation of";

  const hiddenDetails =
    " Century 21 Winter Park Real Estate. Julie's success continued as she owned and managed various commercial properties, including the Vasquez Center, two Century 21 Winter Park Real Estate offices, the Mulligan House, and one Century 21 Grand Lake Real Estate office. ";
  const additional =
    "Julie's passion for real estate has taken her to multiple locations, including Winter Park, Fraser, Tabernash, Grand Lake, all of Grand County, and even the Denver Area. With a proven track record of success, she is the ideal choice for anyone looking to buy or sell property in these areas. Trust her expertise and experience to help you achieve your real estate goals today.";
  const agentPhone = "(970) 531-0211";
  const agentEmail = "jraywinterpark@gmail.com";

  return (
    <div className="about-container">
      <div className="aboutInfo-container">
        About
        <div className={`aboutInfo ${isExpanded ? "expanded" : "collapsed"}`}>
          <p className="bioInfo">
            {alwaysDisplayed}
            {!isExpanded && <span id="showEllipsis">...</span>}
            {isExpanded && (
              <>
                {hiddenDetails}
                <br></br>
                <br></br>
                {additional}
                <br></br>
                <br></br>
                To book an appointment, please call or email us.
                <br></br>
                {agentPhone}
                <br></br>
                {agentEmail}
              </>
            )}
          </p>

          <button onClick={handleToggle} className="moreButton">
            {isExpanded ? "View Less" : "View More"}
          </button>
        </div>
      </div>
      <div className="accreditation-container">
        Professional Accreditations
        <ul className="accList">
          <li>Verified Rocket Homes℠ Agent</li>
          <li>Luxury Collection Specialist</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
