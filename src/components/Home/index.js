import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import LogoTitle from "../../assets/images/at/logo-s.png";
import Logo from "./Logo";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = [
    "y",
    "o",
    "u",
    "n",
    "g",
    "_",
    "o",
    "l",
    "d",
    "_",
    "m",
    "a",
    "t",
    "e",
  ];
  const jobArray = [
    "F",
    "r",
    "e",
    "e",
    "l",
    "a",
    "n",
    "c",
    "e",
    " ",
    "W",
    "o",
    "o",
    "d",
    "s",
    "m",
    "i",
    "t",
    "h",
  ];

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
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Woodworking / Wood Laser Engraving / Fine Details & Fitting</h2>
          <div className="button-div">
            <Link to="/about" className="flat-button">
              ABOUT ME
            </Link>
            <Link to="/portfolio" className="flat-button">
              PORTFOLIO
            </Link>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
