import React, { useEffect, useState } from "react";


const About = () => {
  const [animate, setAnimate] = useState(false);

  // Trigger animation when component mounts
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="about section" id="about">
      <div className="about_container container">
        <div className={`about_data ${animate ? "animate" : ""}`}>
    
          <h2 className="section_title about_title">About</h2>
          <h1 className="section_subtitle about_subtitle">
            Hi, I'm Wisdom Ihundah.
          </h1>

          <p className="about_description">
            A dedicated <span className="about_color">Software Engineer </span> 
            with a strong penchant for building fast, responsive and visually appealing {" "}
            <span className="about_color">web applications. </span> 
            I'm currently in my 2nd year of studying Software Engineering at NIIT (National Institute Of Information Technology)  
            and i've strenghted my technical foundation through <span className="about_color">Harvard Cs50 online course </span> 
            and have successfully{" "} developed innovative projects including a{" "}
            <span className="about_color">Chrome extension</span> for sales lead 
            management, <span className="about_color">a SaaS platform</span> for 
            social media scheduling, and{" "}
            <span className="about_color">responsive e-commerce websites.</span>  <br />
            <br />
            I also run <span className="about_color">Revvona</span>, a small agency i founded in 2025 where my team and i have worked with real estate businesses
            and Airbnb hosts helping them boost their sales and online presence through approriate tailored websites. This has been sharpening both my technical and 
            client management skills. I'm currently looking for Frontend roles where i can grow, collaborate, learn and contribute to
            impactful products.
          </p>

          {/* Skills */}
          <ul className="skills_data">
            <h3>Skills:</h3>
            <li>
              <b>Frontend Development:</b> Html5, Css, JavaScript, React, Next.js, Node.js, Typescript.
            </li>
            <li>
              <b>Tools:</b> Git, GitHub, Vercel, Netlify, Mac, Windows.
            </li>
            <li>
              <b>Design:</b> Figma, Canva.
            </li>
          </ul>

          {/* Certificate */}
          <div className="certificate">
            <img
              src="./src/images/CS50 certificate.jpg"
              alt="Harvard CS50 certificate"
              className="certificate"
            />
          </div>

          {/* Footer text */}
          <div className="about_footer">
            <p>Let's connect to discuss potential collaborations and innovative projects.</p>
          </div>

          {/* Resume Button */}
          <div className="about_btn">
            <div className="resume_bg-btn"></div>
            <button className="view_resume">
              <a
                href="https://drive.google.com/file/d/1yQKSqdaWDUdTHIZS7l8vWU2AUYfbysqg/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
