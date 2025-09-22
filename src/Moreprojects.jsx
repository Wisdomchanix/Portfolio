import React from "react";
import { Link } from "react-router-dom";

const Moreprojects = () => {
  return (
    <>
      {/* MAIN */}
      <main className="main">
        <section className="featured section" id="shop">
          <h2 className="section_title">MORE PROJECTS</h2>

          <div className="featured_container bd_grid">
            {/* Each project */}
            <article className="sneaker burger">
              <img src="/images/Hamburger.png" alt="Featured" className="sneaker_img" />
              <span className="sneaker_name">
                Responsive Website For A Hamburger Resturant
              </span>
              <a
                href="https://wisdomchanix.github.io/Hamburger-Website/"
                target="_blank"
                rel="noreferrer"
                className="button_light"
              >
                View Project <i className="ri-arrow-right-line button_icon"></i>
              </a>
            </article>

            <article className="sneaker burger">
              <img src="/images/Delivery.png" alt="Featured" className="sneaker_img" />
              <span className="sneaker_name">Responsive Delivery Website</span>
              <a
                href="https://wisdomchanix.github.io/Delivery-website/"
                target="_blank"
                rel="noreferrer"
                className="button_light"
              >
                View Project <i className="ri-arrow-right-line button_icon"></i>
              </a>
            </article>

            <article className="sneaker burger">
              <img src="/images/Headphone.png" alt="Featured" className="sneaker_img" />
              <span className="sneaker_name">A Website For A Headphone Company</span>
              <a
                href="https://wisdomchanix.github.io/Headphone-website"
                target="_blank"
                rel="noreferrer"
                className="button_light"
              >
                View Project <i className="ri-arrow-right-line button_icon"></i>
              </a>
            </article>

            <article className="sneaker burger">
              <img src="/images/Travel.png" alt="Featured" className="sneaker_img" />
              <span className="sneaker_name">
                Responsive Website For A Travel Agency
              </span>
              <a
                href="https://wisdomchanix.github.io/Travel-Website/"
                target="_blank"
                rel="noreferrer"
                className="button_light"
              >
                View Project <i className="ri-arrow-right-line button_icon"></i>
              </a>
            </article>

            <article className="sneaker burger">
              <img src="/images/Resturant.png" alt="Featured" className="sneaker_img" />
              <span className="sneaker_name">
                Responsive Website For A Resturant
              </span>
              <a
                href="https://wisdomchanix.github.io/Restaurant-website/"
                target="_blank"
                rel="noreferrer"
                className="button_light"
              >
                View Project <i className="ri-arrow-right-line button_icon"></i>
              </a>
            </article>

            <article className="sneaker burger">
               <img src="/images/Wristwatch.png" alt="Featured" className="sneaker_img" />
              <span className="sneaker_name">
                An E-commerce Website For A Wristwatch Store
              </span>
              <a
                href="https://wisdomchanix.github.io/Luxury-Wristwatch-Website/"
                target="_blank"
                rel="noreferrer"
                className="button_light"
              >
                View Project <i className="ri-arrow-right-line button_icon"></i>
              </a>
            </article>

            <article className="sneaker burger">
              <img src="/images/Shoe.png" alt="Featured" className="sneaker_img" />
              <span className="sneaker_name">
                Responsive E-commerce Sneakers Website
              </span>
              <a
                href="https://wisdomchanix.github.io/Shoe-website/"
                target="_blank"
                rel="noreferrer"
                className="button_light"
              >
                View Project <i className="ri-arrow-right-line button_icon"></i>
              </a>
            </article>

            <article className="sneaker burger">
              <img src="/images/Gym.png" alt="Featured" className="sneaker_img" />
              <span className="sneaker_name">Gym Website</span>
              <a href="#" className="button_light">
                View Project <i className="ri-arrow-right-line button_icon"></i>
              </a>
            </article>

            <article className="sneaker burger">
             <img src="/images/RealEstate.png" alt="Featured" className="sneaker_img" />
              <span className="sneaker_name">Real Estate Website</span>
              <a href="#" className="button_light">
                View Project <i className="ri-arrow-right-line button_icon"></i>
              </a>
            </article>
          </div>
        </section>

        <span className="back_btn">
          <Link to="/" className="back_btn">
            <i className="ri-arrow-left-line button_icon"></i> BACK
          </Link>
        </span>
      </main>

      {/* FOOTER */}
      <footer>
        <span className="footer_copy">
          &#169; All Rights Reserved By DevChainx
        </span>
      </footer>

      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line scrollup_icon"></i>
      </a>
    </>
  );
};

export default Moreprojects;
