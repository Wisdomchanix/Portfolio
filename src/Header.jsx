import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // default dark mode
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-theme", darkMode);
    document.body.classList.toggle("dark-theme", !darkMode);
  };

  // Handle scroll event for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        headerRef.current?.classList.add("scroll-header");
      } else {
        headerRef.current?.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set default theme (dark mode)
  useEffect(() => {
    document.body.classList.add("dark-theme");
  }, []);

  // Highlight active link based on section in view
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScrollSpy = () => {
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80; // offset for header
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <header className="header" id="header" ref={headerRef}>
      <nav className="nav container">
        <a href="#" className="nav_logo">
          Wisdom Chainx
        </a>

        <div className={`nav_menu ${menuOpen ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav_list">
            <li className="nav_item">
              <a
                href="#home"
                onClick={closeMenu}
                className={`nav_link ${activeSection === "home" ? "active-link" : ""}`}
              >
                Home
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#about"
                onClick={closeMenu}
                className={`nav_link ${activeSection === "about" ? "active-link" : ""}`}
              >
                About
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#projects"
                onClick={closeMenu}
                className={`nav_link ${activeSection === "projects" ? "active-link" : ""}`}
              >
                Projects
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#contact"
                onClick={closeMenu}
                className={`nav_link ${activeSection === "contact" ? "active-link" : ""}`}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="nav_dark">
            <span className="change-theme-name">
              {darkMode ? "Dark Mode" : "Light Mode"}
            </span>
            <i
              className={`ri-${darkMode ? "moon-line" : "sun-line"} change-theme`}
              id="theme-button"
              onClick={toggleTheme}
            ></i>
          </div>

          <i
            className="ri-close-fill nav_close"
            id="nav-close"
            onClick={closeMenu}
          ></i>
        </div>

        <div className="nav_toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="ri-function-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
