import React, { useEffect, useState } from "react";
import Loader from './Loader'
import Header from './Header'
import About from './About'
import Project from './Project'
import MoreWorks from './Moreworks'
import Contact from './Contact'


const Hero = () => {
  const [animate, setAnimate] = useState(false);

  // Trigger animations when component mounts
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <section className="section home" id="home">
        <div className="container home_container">
          {/* First line */}
          <div className={`first_line ${animate ? "animate" : ""}`}>
            <div className="code_line line_medium color1"></div>
            <div className="code_line line_short first_line-sqaure color5"></div>
            <div className="dot color5"></div>
          </div>

          <div className={`code_line line_long color4 ${animate ? "animate" : ""}`}></div>

          {/* Second line */}
          <div className={`second_line ${animate ? "animate" : ""}`}>
            <div className="code_line line_medium color3 orange3"></div>
            <div className="square color5"></div>
            <div className="code_line line_short grey3 color5"></div>
            <div className="code_line color1 third_line"></div>
          </div>

          {/* Fourth line */}
          <div className={`fourth_line ${animate ? "animate" : ""}`}>
            <div className="code_line line_short color2"></div>
            <div className="code_line line_short first_line-sqaure color5"></div>
            <div className="dot color5"></div>
            <div className="code_line line_medium color3 orange3"></div>
          </div>

          {/* Fifth line */}
          <div className={`fifth_line ${animate ? "animate" : ""}`}>
            <div className="code_line line_short color1"></div>
            <div className="square color5"></div>
            <div className="code_line line_short grey3 color5"></div>
            <div className="code_line line_short color4"></div>
          </div>

          {/* Home data */}
          <div className="home_data">
            <h1 className="title home_title">Wisdom Chainx</h1>
            <h2 className="subtitle home_subtitle">Software Engineer</h2>
          </div>

          {/* Sixth line */}
          <div className={`sixth_line ${animate ? "animate" : ""}`}>
            <div className="code_line line_medium color3"></div>
            <div className="dot color5 dot_margin"></div>
          </div>

          {/* Seventh line */}
          <div className={`seven_line ${animate ? "animate" : ""}`}>
            <div className="code_line line_short color4"></div>
            <div className="code_line line_shorter color1"></div>
            <div className="code_line line_medium color2 seven_line-margin"></div>
          </div>

          {/* Eighth line */}
          <div className={`eight_line ${animate ? "animate" : ""}`}>
            <div className="code_line line_medium color1 eight_line-margin"></div>
            <div className="code_line line_short color4"></div>
          </div>

          <div className={`code_line line_longer color3 ${animate ? "animate" : ""}`}></div>

          {/* Ninth line */}
          <div className={`nine_line ${animate ? "animate" : ""}`}>
            <div className="code_line line_short color4"></div>
            <div className="square color5"></div>
            <div className="code_line line_short grey3 color5"></div>
            <div className="code_line line_shorter color1"></div>
          </div>
        </div>
      </section>
      <About/>
      <Project/>
      <MoreWorks/>
      <Contact/>
    </>
  );
};

export default Hero;
