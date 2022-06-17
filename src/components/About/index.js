import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import aboutimage1 from "../../assets/images/logo1.png";
import aboutimage2 from "../../assets/images/logo2.png";
import aboutimage3 from "../../assets/images/logo3.png";
import aboutimage4 from "../../assets/images/logo4.png";
import aboutimage5 from "../../assets/images/logo5.png";
import aboutimage6 from "../../assets/images/logo6.png";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious ... looking for a role in ... with the
            opportunity to work with ... on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my implementation... design.. problem at a time.
          </p>
          <p>If I need to define myself in one sentence that would be. . .</p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={aboutimage1} alt="portfolio1" />
            </div>
            <div className="face2">
              <img src={aboutimage2} alt="portfolio2" />
            </div>
            <div className="face3">
              <img src={aboutimage3} alt="portfolio3" />
            </div>
            <div className="face4">
              <img src={aboutimage4} alt="portfolio4" />
            </div>
            <div className="face5">
              <img src={aboutimage5} alt="portfolio5" />
            </div>
            <div className="face6">
              <img src={aboutimage6} alt="portfolio6" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
