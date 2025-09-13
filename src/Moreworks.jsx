import React from "react";

const worksData = [
  {
    name: "More Projects",
    icon: "ri-github-fill",
    link: "https://github.com/Wisdomchanix",
    secondary: "./projects.html",
  },
  {
    name: "Instagram",
    icon: "ri-instagram-line",
    link: "https://www.instagram.com/wisdomchainx?igsh=MTkwcHZiY2xibnhtcQ%3D%3D&utm_source=qr",
  },
  {
    name: "LinkedIn",
    icon: "ri-linkedin-line",
    link: "http://linkedin.com/in/ihundah-wisdom-5602b7262",
  },
  {
    name: "Blog",
    icon: "ri-news-line",
    link: "#", // replace with blog link
  },
];

const MoreWorks = () => {
  return (
    <section className="section more_works container">
      <h2 className="section_title section_subtitle">On The Web</h2>
      <h1 className="section_subtitle">More of my works</h1>

      <div className="grid work_container">
        {worksData.map((work, index) => (
          <a
            key={index}
            href={work.secondary || work.link}
            target="_blank"
            rel="noreferrer"
            className="work_card"
          >
            <div className="work_data">
              <i className={`${work.icon} work_icon`}></i>
            </div>
            <p className="work_link">{work.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MoreWorks;
