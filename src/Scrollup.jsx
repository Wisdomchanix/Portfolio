import { useEffect, useState } from "react";

const Scrollup = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`scrollup ${isVisible ? "show" : "hide"}`}
            id="scroll-up"
            style={{
                position: "fixed",
                right: "1rem",
                bottom: "20px",
                background: "var(--first-color-alt)",
                color: "white",
                border: "none",
                borderRadius: "10%",
                padding: ".5rem",
                cursor: "pointer",
                fontSize: "20px",
                display: isVisible ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 0px 10px 0px #29292980",
            }}
        >
            <i className="ri-arrow-up-line scrollup_icon"></i>
        </button>
    );
};

export default Scrollup;
