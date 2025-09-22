import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import scrollreveal from "scrollreveal";

const projectsData = [
  {
    name: "Social Media Management",
    description: "An app that schedules posts on all social media platforms.",
    github: "https://github.com/Wisdomchanix",
    live: "/under-maintenance", // internal
    stack: ["Javascript", "Next.js", "React", "Css"],
  },
  {
    name: "Revvona",
    description: "Software Agency for Real Estate and Airbnb",
    github: "https://github.com/Wisdomchanix",
    live: "https://Revvona.org", // external
    stack: ["Next.js", "Tailwind", "Node.js"],
  },
  {
    name: "Media Surf",
    description: "Get images and videos of your choice from Media Surf.",
    github: "https://github.com/Wisdomchanix",
    live: "https://mediasurff.netlify.app/", // external
    stack: ["Pexels Api", "Tailwind", "Next.js"],
  },
  {
    name: "Boost Track",
    description:
      "Boost Track, a Chrome extension, uses AI to help track leads and generate emails.",
    github: "https://github.com/Wisdomchanix",
    live: "/under-maintenance", // internal
    stack: ["Javascript", "Html", "Css"],
  },
  {
    name: "Ajebomarket",
    description: "A Men's Fashion E-commerce website.",
    github: "https://github.com/Wisdomchanix",
    live: "https://ajebomarket.com/?gad_source=1&gbraid=0AAAAADe9882NJaVphvUUoSzZBt_prBq7Y",
    stack: ["MongoDB", "Express", "Next.js", "Node.js"],
  },
  {
    name: "Toad&Co",
    description: "Fashion E-commerce Website.",
    github: "https://github.com/Wisdomchanix",
    live: "https://www.toadandco.com",
    stack: ["Node.js", "Next.js", "React", "MongoDB"],
  },
];

const Project = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "60px",
      duration: 1500,
      delay: 150,
      reset: true,
    });

    sr.reveal(".projects", { delay: 300 });
  }, []);

  const handleProjectClick = (live) => {
    if (!live) return;

    if (live.startsWith("/")) {
      // Internal route
      navigate(live);
    } else {
      // External link
      window.open(live, "_blank");
    }
  };

  return (
    <section className="section projects container" id="projects">
      <h2 className="section_title about_section-title">Projects</h2>
      <h1 className="section_subtitle">Products I've Worked On</h1>

      <div className="project_container grid">
        {projectsData.map((project, index) => (
          <div
            className="project_card"
            key={index}
            onClick={() => handleProjectClick(project.live)}
            style={{ cursor: project.live ? "pointer" : "default" }}
          >
            <div className="project_social">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="ri-github-fill project_icon"></i>
                </a>
              )}
              {project.live ? (
                project.live.startsWith("/") ? (
                  // Internal navigation icon
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(project.live);
                    }}
                  >
                    <i className="ri-share-box-line project_icon"></i>
                  </span>
                ) : (
                  // External link icon
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="ri-share-box-line project_icon"></i>
                  </a>
                )
              ) : (
                <i className="ri-share-box-line project_icon"></i>
              )}
            </div>

            <h2 className="project_name">{project.name}</h2>
            <p className="about_project">{project.description}</p>

            <div className="project_lang">
              {project.stack.map((tech, i) => (
                <p key={i} className="stack">
                  {tech}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
