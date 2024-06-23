import React from "react";

import "../styles/preowned.css";

const Preowned = () => {
  return (
    <div>
      <header class="header">
        <div class="header-wrapper">
          <div class="header-left">
            <div class="header-logo-box">
              <img class="header-logo" src="./images/ducati.svg" alt="logo" />
            </div>
          </div>
          <div class="header-center">
            <h1 class="main-title">Pre-owned bikes</h1>
          </div>
          <div class="header-right">
            <button class="country-btn">
              INDIA <ion-icon name="chevron-down-outline"></ion-icon>
            </button>
            <ion-icon class="share-icon" name="share-social-outline"></ion-icon>
            <ion-icon class="mobile-menu-icon" name="menu-outline"></ion-icon>
          </div>
        </div>
      </header>
      <main class="main">
        <section class="hero">
          <div class="hero-container">
            <h2 class="hero-title">Your next motorbike</h2>
            <form class="form">
              <input type="text" placeholder="BIKE" />
              <input type="text" placeholder="CITY" />
              <button class="search-btn">
                SEARCH
                <ion-icon class="search-icon" name="search-outline"></ion-icon>
              </button>
            </form>
            <div class="hero-bottom-container">
              <a href="#">Most Recent</a>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
          </div>
        </section>

        <div class="products-control">
          <div class="products-control--left">
            <h2 class="most-recent">Most recent</h2>
            <button class="filter">
              <span>filters</span>
              <ion-icon class="options-icon" name="options-outline"></ion-icon>
            </button>
            <h2 class="results-amount">12 Results</h2>
          </div>
          <div class="products-control--right">
            <button class="dropdown">
              <span>order by</span>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </button>
            <div class="buttons">
              <button class="btn-left">
                <ion-icon name="list"></ion-icon>
              </button>
              <button class="btn-right">
                <ion-icon name="apps"></ion-icon>
              </button>
            </div>
          </div>
        </div>
        <section class="products">
          <article class="product-card">
            <div class="product-img-box">
              <img class="product-img" src="./images/60.avif" alt="bike img" />
            </div>
            <div class="product-info-box">
              <div class="product-info--row-1">
                <span class="make">ducati</span>
                <div class="date">
                  <ion-icon name="calendar-clear-outline"></ion-icon>
                  <span>27/11/2023</span>
                </div>
              </div>
              <h3 class="product-name">Monster</h3>
              <div class="product-content">
                <div class="product-detail-row">
                  <span class="key">city</span>
                  <span class="value">new delhi</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">km</span>
                  <span class="value">10,650</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">first registration</span>
                  <span class="value">2021</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">power</span>
                  <span class="value">111 HP (83 KW)</span>
                </div>
              </div>
              <div class="product-info--row-2">
                <span class="price">₹11,99,000.00</span>
                <div class="img-box">
                  <img
                    src="./images/approved_eng.svg"
                    alt="ducati approved stamp"
                  />
                </div>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-img-box">
              <img class="product-img" src="./images/61.avif" alt="bike img" />
            </div>
            <div class="product-info-box">
              <div class="product-info--row-1">
                <span class="make">ducati</span>
                <div class="date">
                  <ion-icon name="calendar-clear-outline"></ion-icon>
                  <span>03/11/2023</span>
                </div>
              </div>
              <h3 class="product-name">Multistrada 950 S</h3>
              <div class="product-content">
                <div class="product-detail-row">
                  <span class="key">city</span>
                  <span class="value">new delhi</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">km</span>
                  <span class="value">12,267</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">first registration</span>
                  <span class="value">2020</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">power</span>
                  <span class="value">110 HP (82 KW)</span>
                </div>
              </div>
              <div class="product-info--row-2">
                <span class="price">₹12,99,000.00</span>
                <div class="img-box">
                  <img
                    src="./images/approved_eng.svg"
                    alt="ducati approved stamp"
                  />
                </div>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-img-box">
              <img class="product-img" src="./images/62.avif" alt="bike img" />
            </div>
            <div class="product-info-box">
              <div class="product-info--row-1">
                <span class="make">scrambler</span>
                <div class="date">
                  <ion-icon name="calendar-clear-outline"></ion-icon>
                  <span>13/10/2023</span>
                </div>
              </div>
              <h3 class="product-name">Scrambler 1100 Dark PRO</h3>
              <div class="product-content">
                <div class="product-detail-row">
                  <span class="key">city</span>
                  <span class="value">new delhi</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">km</span>
                  <span class="value">18,745</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">first registration</span>
                  <span class="value">2021</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">power</span>
                  <span class="value">85 HP (63 KW)</span>
                </div>
              </div>
              <div class="product-info--row-2">
                <span class="price">₹9,25,000.00</span>
                <div class="img-box">
                  <img
                    src="./images/approved_eng.svg"
                    alt="ducati approved stamp"
                  />
                </div>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-img-box">
              <img class="product-img" src="./images/63.avif" alt="bike img" />
            </div>
            <div class="product-info-box">
              <div class="product-info--row-1">
                <span class="make">ducati</span>
                <div class="date">
                  <ion-icon name="calendar-clear-outline"></ion-icon>
                  <span>27/09/2023</span>
                </div>
              </div>
              <h3 class="product-name">Multistrada V2 S</h3>
              <div class="product-content">
                <div class="product-detail-row">
                  <span class="key">city</span>
                  <span class="value">kolkata</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">km</span>
                  <span class="value">10,841</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">first registration</span>
                  <span class="value">2023</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">power</span>
                  <span class="value">113 HP (84 KW)</span>
                </div>
              </div>
              <div class="product-info--row-2">
                <span class="price">₹17,00,000.00</span>
                <div class="img-box">
                  <img
                    src="./images/approved_eng.svg"
                    alt="ducati approved stamp"
                  />
                </div>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-img-box">
              <img class="product-img" src="./images/64.avif" alt="bike img" />
            </div>
            <div class="product-info-box">
              <div class="product-info--row-1">
                <span class="make">scrambler</span>
                <div class="date">
                  <ion-icon name="calendar-clear-outline"></ion-icon>
                  <span>25/08/2023</span>
                </div>
              </div>
              <h3 class="product-name">Urban Motard</h3>
              <div class="product-content">
                <div class="product-detail-row">
                  <span class="key">city</span>
                  <span class="value">new delhi</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">km</span>
                  <span class="value">231</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">first registration</span>
                  <span class="value">2022</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">power</span>
                  <span class="value">73 HP (54 KW)</span>
                </div>
              </div>
              <div class="product-info--row-2">
                <span class="price">₹10,99,000.00</span>
                <div class="img-box">
                  <img
                    src="./images/approved_eng.svg"
                    alt="ducati approved stamp"
                  />
                </div>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-img-box">
              <img class="product-img" src="./images/65.avif" alt="bike img" />
            </div>
            <div class="product-info-box">
              <div class="product-info--row-1">
                <span class="make">ducati</span>
                <div class="date">
                  <ion-icon name="calendar-clear-outline"></ion-icon>
                  <span>20/05/2023</span>
                </div>
              </div>
              <h3 class="product-name">Panigale V4 S</h3>
              <div class="product-content">
                <div class="product-detail-row">
                  <span class="key">city</span>
                  <span class="value">new delhi</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">km</span>
                  <span class="value">4,669</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">first registration</span>
                  <span class="value">2019</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">power</span>
                  <span class="value">214 HP (160 KW)</span>
                </div>
              </div>
              <div class="product-info--row-2">
                <span class="price">₹23,99,000.00</span>
                <div class="img-box">
                  <img
                    src="./images/approved_eng.svg"
                    alt="ducati approved stamp"
                  />
                </div>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-img-box">
              <img class="product-img" src="./images/66.webp" alt="bike img" />
            </div>
            <div class="product-info-box">
              <div class="product-info--row-1">
                <span class="make">ducati</span>
                <div class="date">
                  <ion-icon name="calendar-clear-outline"></ion-icon>
                  <span>15/09/2023</span>
                </div>
              </div>
              <h3 class="product-name">Monster</h3>
              <div class="product-content">
                <div class="product-detail-row">
                  <span class="key">city</span>
                  <span class="value">new delhi</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">km</span>
                  <span class="value">1,137</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">first registration</span>
                  <span class="value">2023</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">power</span>
                  <span class="value">111 HP (83 KW)</span>
                </div>
              </div>
              <div class="product-info--row-2">
                <span class="price">₹11,50,000.00</span>
                <div class="img-box">
                  <img
                    src="./images/approved_eng.svg"
                    alt="ducati approved stamp"
                  />
                </div>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-img-box">
              <img class="product-img" src="./images/67.avif" alt="bike img" />
            </div>
            <div class="product-info-box">
              <div class="product-info--row-1">
                <span class="make">ducati</span>
                <div class="date">
                  <ion-icon name="calendar-clear-outline"></ion-icon>
                  <span>25/03/2023</span>
                </div>
              </div>
              <h3 class="product-name">Diavel 1260</h3>
              <div class="product-content">
                <div class="product-detail-row">
                  <span class="key">city</span>
                  <span class="value">hyderabad</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">km</span>
                  <span class="value">2,948</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">first registration</span>
                  <span class="value">2020</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">power</span>
                  <span class="value">162 HP (121 KW)</span>
                </div>
              </div>
              <div class="product-info--row-2">
                <span class="price">₹17,00,000.00</span>
                <div class="img-box">
                  <img
                    src="./images/approved_eng.svg"
                    alt="ducati approved stamp"
                  />
                </div>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-img-box">
              <img class="product-img" src="./images/68.avif" alt="bike img" />
            </div>
            <div class="product-info-box">
              <div class="product-info--row-1">
                <span class="make">ducati</span>
                <div class="date">
                  <ion-icon name="calendar-clear-outline"></ion-icon>
                  <span>19/10/2023</span>
                </div>
              </div>
              <h3 class="product-name">Multistrada V4 S Radar</h3>
              <div class="product-content">
                <div class="product-detail-row">
                  <span class="key">city</span>
                  <span class="value">mumbai</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">km</span>
                  <span class="value">2,011</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">first registration</span>
                  <span class="value">2023</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">power</span>
                  <span class="value">170 HP (127 KW)</span>
                </div>
              </div>
              <div class="product-info--row-2">
                <span class="price">Retail price upon request</span>
                <div class="img-box">
                  <img
                    src="./images/approved_eng.svg"
                    alt="ducati approved stamp"
                  />
                </div>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-img-box">
              <img class="product-img" src="./images/69.avif" alt="bike img" />
            </div>
            <div class="product-info-box">
              <div class="product-info--row-1">
                <span class="make">ducati</span>
                <div class="date">
                  <ion-icon name="calendar-clear-outline"></ion-icon>
                  <span>19/10/2023</span>
                </div>
              </div>
              <h3 class="product-name">Monster</h3>
              <div class="product-content">
                <div class="product-detail-row">
                  <span class="key">city</span>
                  <span class="value">mumbai</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">km</span>
                  <span class="value">1,291</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">first registration</span>
                  <span class="value">2023</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">power</span>
                  <span class="value">111 HP (83 KW)</span>
                </div>
              </div>
              <div class="product-info--row-2">
                <span class="price">Retail price upon request</span>
                <div class="img-box">
                  <img
                    src="./images/approved_eng.svg"
                    alt="ducati approved stamp"
                  />
                </div>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-img-box">
              <img class="product-img" src="./images/70.avif" alt="bike img" />
            </div>
            <div class="product-info-box">
              <div class="product-info--row-1">
                <span class="make">scrambler</span>
                <div class="date">
                  <ion-icon name="calendar-clear-outline"></ion-icon>
                  <span>19/07/2023</span>
                </div>
              </div>
              <h3 class="product-name">Scrambler 1100 Dark PRO</h3>
              <div class="product-content">
                <div class="product-detail-row">
                  <span class="key">city</span>
                  <span class="value">pune</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">km</span>
                  <span class="value">8,500</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">first registration</span>
                  <span class="value">2022</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">power</span>
                  <span class="value">95 HP (71 KW)</span>
                </div>
              </div>
              <div class="product-info--row-2">
                <span class="price">Retail price upon request</span>
                <div class="img-box">
                  <img
                    src="./images/approved_eng.svg"
                    alt="ducati approved stamp"
                  />
                </div>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-img-box">
              <img class="product-img" src="./images/71.avif" alt="bike img" />
            </div>
            <div class="product-info-box">
              <div class="product-info--row-1">
                <span class="make">ducati</span>
                <div class="date">
                  <ion-icon name="calendar-clear-outline"></ion-icon>
                  <span>15/06/2023</span>
                </div>
              </div>
              <h3 class="product-name">Panigale V4 S</h3>
              <div class="product-content">
                <div class="product-detail-row">
                  <span class="key">city</span>
                  <span class="value">pune</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">km</span>
                  <span class="value">3,693</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">first registration</span>
                  <span class="value">2019</span>
                </div>
                <div class="product-detail-row">
                  <span class="key">power</span>
                  <span class="value">215 HP (160 KW)</span>
                </div>
              </div>
              <div class="product-info--row-2">
                <span class="price">Retail price upon request</span>
                <div class="img-box">
                  <img
                    src="./images/approved_eng.svg"
                    alt="ducati approved stamp"
                  />
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
      <footer class="footer">
        <ul class="footer-links">
          <li>
            <a href="#" class="footer-link">
              terms and conditions
            </a>
          </li>
          <li>
            <a href="#" class="footer-link">
              privacy information
            </a>
          </li>
          <li>
            <a href="#" class="footer-link">
              cookie policy
            </a>
          </li>
        </ul>

        <p class="copyright-message">
          Copyright © 2017 Ducati Motor Holding S.p.A – A Sole Shareholder
          Company - A Company subject to the Management and Coordination
          activities of AUDI AG. All rights reserved. VAT 05113870967
        </p>
      </footer>
    </div>
  );
};

export default Preowned;
