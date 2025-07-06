import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "./css/back.css";
import "./css/banner.css";

const Banner = ({ isDarkTheme, onToggleTheme }) => {
  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <div className="banner d-flex align-items-center">
        <div className="banner-left">
          <label className={`switch d-flex ${isDarkTheme ? "checked" : ""}`}>
            <input
              id="toggle-theme"
              type="checkbox"
              checked={isDarkTheme}
              onChange={onToggleTheme}
            />
            <span className="light-txt">light</span>
            <span className="dark-txt">dark</span>
          </label>
          <h1>
            Lewis Mwangi<br /> Gichobi
          </h1>
          <div className="inner-desc">
            <p>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="mtion"
              >
                <span className="mi-4"> </span>
                <TypeAnimation
                  sequence={[
                    "SOFTWARE ENGINEER",
                    2000,
                    "FULL STACK DEVELOPER",
                    2000,
                    "MACHINE LEARNING ENTHUSIAST",
                    2000,
                  ]}
                  speed={70}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity}
                />
              </motion.div>
            </p>
            <form>
              <div className="form-group d-flex flex-wrap">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputtext1"
                  placeholder="Type message here"
                />
                <button type="submit" className="black-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="social-icons d-flex align-items-center">
            <ul className="d-flex">
              <li>
                <a
                  href="https://wa.me/254716230232"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/gi.chobi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/l_kigwa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Kigwaaaa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="/cv/LEWISGICHOBICV.pdf"
                  download="LEWISGICHOBICV.pdf"
                  className="download-cv-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-download"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lewis-gichobi-820830265/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
            <span className="sss">My Socials</span>
          </div>
        </div>
        <div className="banner-right d-flex">
          <div className="family">
            <img
              // src="https://yudiz.com/codepen/real-estate/property-img-one.png"
              src="/assets/1f87b29a2df46100a75aa86b170a21cb.jpg"
              alt="img"
              className="img-fluid"
            />
            <img
              // src="https://yudiz.com/codepen/real-estate/property-img-two.png"
                src="/assets/78313357198a836e64cc07f7fab3da8b.jpg"
            
              alt="img"
              className="img-fluid"
            />
            <div className="banner-right-inner">
              <h2>20+</h2>
              <span>
                completed <br /> projects
              </span>
              <img
                src="https://yudiz.com/codepen/real-estate/heart-icon.svg"
                alt="heart-icon"
                className="img-fluid"
              />
            </div>
            <img
              // src="https://yudiz.com/codepen/real-estate/property-img-three.png"
               src="/assets/e7e9437b012c8d40acaa501be5afafa3.jpg"
              alt="img"
              className="img-fluid"
            />
            <img
              // src="https://yudiz.com/codepen/real-estate/property-img-four.png"
              src="https://yudiz.com/codepen/real-estate/property-img-four.png"
              alt="img"
              className="img-fluid"
            />
          </div>
          <div className="sale">
            <img
              src="/assets/10ee98130fcb4261135dce02f701518a.jpg"
              alt="img"
              className="img-fluid"
            />
            <img
              src="https://yudiz.com/codepen/real-estate/property-img-six.png"
              alt="img"
              className="img-fluid"
            />
            <div className="banner-right-inner">
              <h2>4+</h2>
              <span>
                Years <br /> Of Experience
              </span>
              <img
                src="https://yudiz.com/codepen/real-estate/unit-icon.svg"
                alt="unit-icon"
                className="img-fluid"
              />
            </div>
            <img
              src="https://yudiz.com/codepen/real-estate/property-img-seven.png"
              alt="img"
              className="img-fluid"
            />
            <img
              src="https://yudiz.com/codepen/real-estate/property-img-eight.png"
              alt="img"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
