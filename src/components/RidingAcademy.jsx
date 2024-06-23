import React from "react";

import "../styles/riding-academy.css";

const RidingAcademy = () => {
  return (
    <div class="page-wrapper">
      <header class="header">
        <div class="top-header">
          <div class="top-header--body">
            <div class="top-header--left">
              <a href="#" class="scrambler-logo-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  viewBox="0 0 161 48"
                  aria-hidden="true"
                  role="img"
                  fill="#fff"
                >
                  <path d="M83.8,33.3h-6.6l-3,14.2h7c4.2,0.2,7.8-2.8,8.6-6.9C90.6,36.3,89.4,33.3,83.8,33.3z M83.9,40.3c-0.1,1.1-0.5,2.1-1.2,3  c-0.4,0.6-1.2,1-2,0.9h-0.5l1.7-7.7h0.5c0.7-0.1,1.3,0.3,1.6,0.9C84.3,38.4,84.2,39.4,83.9,40.3z M100.5,33.3l-2,9.1  c-0.3,1.2-0.9,1.6-1.4,1.6c-0.5,0-1-0.4-0.8-1.6l2-9.1h-5.6l-2,9.4c-0.8,3.4,1.3,5.1,5.6,5.1c4.3,0,7-1.7,7.8-5.1l2-9.4H100.5z   M114.1,42.3c-0.4,1.6-1,2-1.7,2c-1.4,0-1.2-1.6-0.8-3.8c0.5-2.2,0.9-3.8,2.3-3.8c0.7,0,1.2,0.3,0.9,2h5.1c0.9-4.2-1.8-5.6-5.3-5.6  c-4.4-0.2-8.3,3-8.9,7.4c-0.9,4.4,0.7,7.5,5.6,7.5c3.5,0,7-1.7,7.8-5.6h-5.1V42.3z M125.6,33.3l-7.6,14.2h5.3l1-2.3h4v2.3h5.7  l-1.6-14.2H125.6z M128.5,41.8h-2.3l2.3-5.3l0,0V41.8z M148.2,33.3h-12.5l-0.9,3.8h3.5L136,47.5h5.6l2.2-10.4h3.5L148.2,33.3z   M146.2,47.5h5.6l3-14.2h-5.6L146.2,47.5z M136.4,30.6l1-5.5h-6.8l1.4-6.9h5.5l1-4.8h-5.5l1.6-7.8h7.2l1.2-5.3l-7.2-0.1H130  l-6.3,30.4H136.4z M115.3,30.6h6.4l1.2-5.5h-6.5L121.6,0h-5.7l-6.4,30.6H115.3z M22.8,24.3l3.8-18.2c0.2-0.4,0.5-0.7,0.9-0.8h5.3  l1-5.2h-8.6c-1.8,0.1-3.4,1.3-3.8,3.1l0,0l-5.1,24.1v0.3c-0.3,1.3,0.6,2.6,1.9,2.8c0.2,0,0.5,0.1,0.7,0h8.6l1.2-5.5h-5.3  C22.9,25.1,22.7,24.7,22.8,24.3z M10.4,6.2c0-0.4,0.4-0.8,0.8-0.8h6L18.5,0H8.7C6.9,0.1,5.3,1.4,5,3.3c-0.1,0.5-0.1,1,0,1.4  l3.5,19.6v0.1c-0.1,0.4-0.5,0.7-0.9,0.8H1.2L0,30.6h9.9c1.8-0.1,3.4-1.3,3.8-3.1c0.1-0.3,0.1-0.7,0.1-1L10.4,6.2z M158.5,0.3h-12.8  l-6.3,30.3h5.9l1.8-9h1.3l1,9h5.9l-1-9c1.7-0.2,3.1-1.4,3.5-3l3.1-15.2V3.3c0.3-1.3-0.5-2.6-1.8-2.9C158.9,0.3,158.7,0.2,158.5,0.3z   M152.6,15.5L152.6,15.5c-0.1,0.4-0.5,0.8-0.9,0.8h-3.5l2.2-10.7h3.5c0.3,0,0.6,0.3,0.6,0.6c0,0.1,0,0.1,0,0.2l0,0L152.6,15.5z   M103.1,30.6c1.8-0.1,3.3-1.4,3.8-3.1l2.1-9.9c0.1-1.1-0.6-2.1-1.7-2.2c-0.1,0-0.3,0-0.4,0c1.4-0.1,2.6-1,3-2.3l2-9.5V3.4  c0.4-1.3-0.4-2.7-1.7-3c-0.2-0.1-0.5-0.1-0.7-0.1H96.6l-6.4,30.3H103.1z M101.5,5.6h3.5c0.3,0,0.6,0.3,0.6,0.6c0,0.1,0,0.1,0,0.2  l0,0l-1.4,7h-4.3L101.5,5.6z M98.9,18.2h4.3l-1.3,6.1l0,0c-0.1,0.4-0.5,0.7-0.9,0.8h-3.5L98.9,18.2z M49.5,18.6l3.1-15.2V3.3  c0.4-1.3-0.4-2.7-1.7-3c-0.2-0.1-0.5-0.1-0.7-0.1H37.4l-6.1,30.3H37l1.8-9h1.3l1,9h5.7l-1-9C47.6,21.4,49.1,20.3,49.5,18.6z   M44.4,15.3c-0.1,0.4-0.5,0.7-0.9,0.8H40l2.2-10.7h3.5c0.3,0,0.6,0.3,0.6,0.6c0,0.1,0,0.1,0,0.2l0,0L44.4,15.3L44.4,15.3z M62.3,0  h-1.7L48.5,30.4h6.4l1.3-3.6h4.4l-0.3,3.6h6.1L67,0H62.3L62.3,0z M60.7,22h-3l3.9-11.1L60.7,22z M77.8,28.4l3.3-5.3l3.4-6.2  l-2.9,13.8h5.9L93.7,0h-6.3l-6.4,13.3L80.5,0h-6.3l-6.4,30.4l5.9,0.1L76.5,17L77.8,28.4z"></path>
                </svg>
                <span>the land of joy</span>
              </a>
            </div>
            <div class="top-header--right">
              <div class="country">
                <a href="#">
                  <img src="./images/globe.png" alt="globe" />
                  <span>International website</span>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </a>
              </div>
              <div
                class="white-vertical-bar"
                role="presentation"
                aria-label="presentation bar"
              ></div>

              <div class="login">
                <span>MyDucati</span>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>

        <nav class="main-menu">
          <div class="sticky">
            <div class="sticky-body">
              <div class="sticky-top-wrap">
                <div
                  class="main-menu--left"
                >
                  <div class="hamburger">
                    <ion-icon
                      class="hamburger-icon"
                      name="menu-outline"
                    ></ion-icon>
                  </div>

                  <ul class="main-menu--list main-menu--list__left">
                    <li>
                      <a href="#" class="main-menu--link link-with-triangle">
                        models
                        <ion-icon class="triangle" name="caret-down"></ion-icon>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="main-menu--link link-with-triangle">
                        equipment
                        <ion-icon class="triangle" name="caret-down"></ion-icon>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="main-menu--link">
                        shop
                      </a>
                    </li>
                    <li>
                      <a href="#" class="main-menu--link">
                        DWP 2024
                      </a>
                    </li>
                  </ul>
                </div>

                <div
                  class="logo-container"
                >
                  <a class="logo-link" href="#">
                    <img
                      src="./images/ducati-logo.png"
                      alt="ducati logo"
                      class="logo"
                    />
                  </a>
                </div>

                <ul class="main-menu--list main-menu--list__right">
                  <li>
                    <a href="#" class="main-menu--link">
                      dealer locator
                    </a>
                  </li>
                  <li>
                    <a href="#" class="main-menu--link">
                      test ride
                    </a>
                  </li>
                  <li>
                    <a href="#" class="main-menu--link">
                      configurator
                    </a>
                  </li>
                </ul>

                <a href="#" class="nav-link--red">
                  Models
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main class="main">
        <section class="hero">
          <div class="hero-img-box">
            <picture class="picture">
              <source
                srcset="./images/hero-1.webp"
                media="(min-width: 68.75em)"
              />

              <source
                srcset="./images/hero-2.webp"
                media="(min-width: 46.25em)"
              />

              <source srcset="./images/hero-3.webp" media="(min-width: 0em)" />

              <img
                class="hero-img"
                srcset="./images/hero-1.webp"
                alt="hero img"
              />
            </picture>

            <div class="hero-info">
              <p class="subtitle">DRE</p>
              <h1 class="title">Riding Academy</h1>
            </div>
          </div>
        </section>

        <section class="about">
          <div class="about-inner-wrapper">
            <p>
              Since 2003, more than 30,000 motorcyclists from all over the world
              have chosen the Ducati experience to improve their riding skills.
            </p>
            <p>
              Very high-level teaching and instructors, prestigious locations,
              the entire latest Ducati range, and lots of fun have always been
              the features that make each DRE course a unique offer.
            </p>
            <p>
              Five experiences suitable for every style:
              <strong>Rookie, Road, Track Warm Up, Racetrack</strong> and
              <strong>Adventure</strong>.
            </p>
            <p>
              For each course, Ducati will provide its motorcycles fleet for
              each participant, the possibility of renting technical clothing
              and a personalised photo-video service.
            </p>
            <p>
              Ducati also offers the possibility of giving a voucher for a DRE
              course to choose, a unique and exclusive <strong>gift</strong>,
              ideal for a real enthusiast. For more information
              <a href="#">contact the DRE office</a>.
            </p>
          </div>
        </section>

        <section class="courses">
          <h2 class="courses-title">Discover all the courses</h2>

          <div class="courses-body">
            <div class="course-card">
              <div class="course-img-box">
                <picture>
                  <source srcset="./images/47.jpg" media="max-width: 35em" />
                  <img
                    class="course-img"
                    src="./images/46.jpg"
                    alt="bike image"
                  />
                </picture>
              </div>
              <div class="course-info-box">
                <span class="course-category">DRE Academy</span>
                <span class="course-name">Rookie</span>
              </div>
            </div>

            <div class="course-card">
              <div class="course-img-box">
                <picture>
                  <source srcset="./images/49.jpg" media="max-width: 35em" />
                  <img
                    class="course-img"
                    src="./images/48.jpg"
                    alt="bike image"
                  />
                </picture>
              </div>
              <div class="course-info-box">
                <span class="course-category">DRE Academy</span>
                <span class="course-name">Road</span>
              </div>
            </div>

            <div class="course-card">
              <div class="course-img-box">
                <picture>
                  <source srcset="./images/51.jpg" media="max-width: 35em" />
                  <img
                    class="course-img"
                    src="./images/50.jpg"
                    alt="bike image"
                  />
                </picture>
              </div>
              <div class="course-info-box">
                <span class="course-category">DRE Academy</span>
                <span class="course-name">Track Warm Up</span>
              </div>
            </div>

            <div class="course-card">
              <div class="course-img-box">
                <picture>
                  <source srcset="./images/53.jpg" media="max-width: 35em" />
                  <img
                    class="course-img"
                    src="./images/52.jpg"
                    alt="bike image"
                  />
                </picture>
              </div>
              <div class="course-info-box">
                <span class="course-category">DRE Academy</span>
                <span class="course-name">Racetrack</span>
              </div>
            </div>

            <div class="course-card">
              <div class="course-img-box">
                <picture>
                  <source srcset="./images/55.jpg" media="max-width: 35em" />
                  <img
                    class="course-img"
                    src="./images/54.jpg"
                    alt="bike image"
                  />
                </picture>
              </div>
              <div class="course-info-box">
                <span class="course-category">DRE Academy</span>
                <span class="course-name">Racetrack</span>
              </div>
            </div>

            <div class="course-card">
              <div class="course-img-box">
                <picture>
                  <source srcset="./images/57.jpg" media="max-width: 35em" />
                  <img
                    class="course-img"
                    src="./images/56.jpg"
                    alt="bike image"
                  />
                </picture>
              </div>
              <div class="course-info-box">
                <span class="course-category">DRE Academy</span>
                <span class="course-name">Racetrack</span>
              </div>
            </div>
          </div>
        </section>

        <section class="about">
          <div class="about-inner-wrapper">
            <p>
              For any need or request for information, contact the DRE office at
              the e-mail address <a href="#">dre@ducati.com</a>.
            </p>
            <p>The DRE team awaits you for an unforgettable 2024</p>
          </div>
        </section>

        <div class="logo-picture-container">
          <picture>
            <source srcset="./images/59.png" media="(max-width: 61.24em)" />
            <img class="dre-img" src="./images/58.png" alt="DRE logo" />
          </picture>
        </div>

        <section class="subscribe">
          <div class="subscribe-wrapper">
            <h3 class="subscribe-title">Sign up for Email</h3>
            <div class="subscribe-privacy">
              Read our <a href="#">privacy policy</a> to learn about data
              processing
            </div>
            <div class="subscribe-updates">
              Sign up for Ducati latest news and updates
            </div>
            <form class="form">
              <input
                type="email"
                id="email"
                placeholder="YOUR EMAIL ADDRESS"
                autocomplete="off"
              />
              <input type="submit" value="SUBSCRIBE" />
            </form>
            <div class="recaptcha">
              This site is protected by reCAPTCHA and the Google
              <a href="#">Privacy Policy</a> and
              <a href="#">Terms of Service apply</a>.
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <div class="footer-body">
          <div class="footer-logo">
            <img
              src="./images/Ducati-Member-of-the-Audi-Group.svg"
              alt="ducati logo"
            />
          </div>

          <div class="footer-links-wrapper">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Information</a>
            <a href="#">Cookies Information</a>
          </div>
        </div>

        <div class="footer-copyright">
          Copyright © 2023 Ducati Motor Holding S.p.A. – A Sole Shareholder
          Company - A Company subject to the Management and Coordination
          activities of AUDI AG. All rights reserved. VAT 05113870967
        </div>

        <nav class="footer-nav">
          <div class="footer-left">
            <div class="scrambler-ducati">
              <div class="footer-logo-box">
                <img src="./images/logo-scrambler.svg" alt="scramber ducati" />
              </div>
              <p>The land of joy</p>
            </div>
            <div class="scrambler-configurator">
              <div class="footer-logo-box">
                <img
                  src="./images/Scrambler-configurator-icon.svg"
                  alt="scrambler configurator"
                />
              </div>
              <p>scrambler configurator</p>
            </div>
          </div>
          <div class="footer-center">
            <a href="#" class="social">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#" class="social">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#" class="social">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
            <a href="#" class="social">
              <ion-icon name="logo-tiktok"></ion-icon>
            </a>
            <a href="#" class="social">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#" class="social">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
          <div class="footer-right">
            <img src="./images/globe.png" alt="globe" />
            <span>International Website</span>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default RidingAcademy;
