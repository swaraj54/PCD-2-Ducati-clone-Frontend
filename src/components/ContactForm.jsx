import React from "react";
import "../styles/contact-form.css";

const ContactForm = () => {
  return (
    <div class="page-wrapper">
      <div class="page-internal-wrapper">
        <div class="scrambler-theme form-wrapper">
          <div class="body">
            <form class="form">
              <div class="logo scrambler">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="161"
                  height="48"
                  viewBox="0 0 161 48"
                  fill="#000000"
                  aria-hidden="true"
                  role="img"
                >
                  <path d="M83.8,33.3h-6.6l-3,14.2h7c4.2,0.2,7.8-2.8,8.6-6.9C90.6,36.3,89.4,33.3,83.8,33.3z M83.9,40.3c-0.1,1.1-0.5,2.1-1.2,3  c-0.4,0.6-1.2,1-2,0.9h-0.5l1.7-7.7h0.5c0.7-0.1,1.3,0.3,1.6,0.9C84.3,38.4,84.2,39.4,83.9,40.3z M100.5,33.3l-2,9.1  c-0.3,1.2-0.9,1.6-1.4,1.6c-0.5,0-1-0.4-0.8-1.6l2-9.1h-5.6l-2,9.4c-0.8,3.4,1.3,5.1,5.6,5.1c4.3,0,7-1.7,7.8-5.1l2-9.4H100.5z   M114.1,42.3c-0.4,1.6-1,2-1.7,2c-1.4,0-1.2-1.6-0.8-3.8c0.5-2.2,0.9-3.8,2.3-3.8c0.7,0,1.2,0.3,0.9,2h5.1c0.9-4.2-1.8-5.6-5.3-5.6  c-4.4-0.2-8.3,3-8.9,7.4c-0.9,4.4,0.7,7.5,5.6,7.5c3.5,0,7-1.7,7.8-5.6h-5.1V42.3z M125.6,33.3l-7.6,14.2h5.3l1-2.3h4v2.3h5.7  l-1.6-14.2H125.6z M128.5,41.8h-2.3l2.3-5.3l0,0V41.8z M148.2,33.3h-12.5l-0.9,3.8h3.5L136,47.5h5.6l2.2-10.4h3.5L148.2,33.3z   M146.2,47.5h5.6l3-14.2h-5.6L146.2,47.5z M136.4,30.6l1-5.5h-6.8l1.4-6.9h5.5l1-4.8h-5.5l1.6-7.8h7.2l1.2-5.3l-7.2-0.1H130  l-6.3,30.4H136.4z M115.3,30.6h6.4l1.2-5.5h-6.5L121.6,0h-5.7l-6.4,30.6H115.3z M22.8,24.3l3.8-18.2c0.2-0.4,0.5-0.7,0.9-0.8h5.3  l1-5.2h-8.6c-1.8,0.1-3.4,1.3-3.8,3.1l0,0l-5.1,24.1v0.3c-0.3,1.3,0.6,2.6,1.9,2.8c0.2,0,0.5,0.1,0.7,0h8.6l1.2-5.5h-5.3  C22.9,25.1,22.7,24.7,22.8,24.3z M10.4,6.2c0-0.4,0.4-0.8,0.8-0.8h6L18.5,0H8.7C6.9,0.1,5.3,1.4,5,3.3c-0.1,0.5-0.1,1,0,1.4  l3.5,19.6v0.1c-0.1,0.4-0.5,0.7-0.9,0.8H1.2L0,30.6h9.9c1.8-0.1,3.4-1.3,3.8-3.1c0.1-0.3,0.1-0.7,0.1-1L10.4,6.2z M158.5,0.3h-12.8  l-6.3,30.3h5.9l1.8-9h1.3l1,9h5.9l-1-9c1.7-0.2,3.1-1.4,3.5-3l3.1-15.2V3.3c0.3-1.3-0.5-2.6-1.8-2.9C158.9,0.3,158.7,0.2,158.5,0.3z   M152.6,15.5L152.6,15.5c-0.1,0.4-0.5,0.8-0.9,0.8h-3.5l2.2-10.7h3.5c0.3,0,0.6,0.3,0.6,0.6c0,0.1,0,0.1,0,0.2l0,0L152.6,15.5z   M103.1,30.6c1.8-0.1,3.3-1.4,3.8-3.1l2.1-9.9c0.1-1.1-0.6-2.1-1.7-2.2c-0.1,0-0.3,0-0.4,0c1.4-0.1,2.6-1,3-2.3l2-9.5V3.4  c0.4-1.3-0.4-2.7-1.7-3c-0.2-0.1-0.5-0.1-0.7-0.1H96.6l-6.4,30.3H103.1z M101.5,5.6h3.5c0.3,0,0.6,0.3,0.6,0.6c0,0.1,0,0.1,0,0.2  l0,0l-1.4,7h-4.3L101.5,5.6z M98.9,18.2h4.3l-1.3,6.1l0,0c-0.1,0.4-0.5,0.7-0.9,0.8h-3.5L98.9,18.2z M49.5,18.6l3.1-15.2V3.3  c0.4-1.3-0.4-2.7-1.7-3c-0.2-0.1-0.5-0.1-0.7-0.1H37.4l-6.1,30.3H37l1.8-9h1.3l1,9h5.7l-1-9C47.6,21.4,49.1,20.3,49.5,18.6z   M44.4,15.3c-0.1,0.4-0.5,0.7-0.9,0.8H40l2.2-10.7h3.5c0.3,0,0.6,0.3,0.6,0.6c0,0.1,0,0.1,0,0.2l0,0L44.4,15.3L44.4,15.3z M62.3,0  h-1.7L48.5,30.4h6.4l1.3-3.6h4.4l-0.3,3.6h6.1L67,0H62.3L62.3,0z M60.7,22h-3l3.9-11.1L60.7,22z M77.8,28.4l3.3-5.3l3.4-6.2  l-2.9,13.8h5.9L93.7,0h-6.3l-6.4,13.3L80.5,0h-6.3l-6.4,30.4l5.9,0.1L76.5,17L77.8,28.4z"></path>
                </svg>
              </div>
              <br />
              <label class="label label-title">Contact by dealer</label>
              <br />
              <br />
              <br />
              <div class="fs">
                <div class="wrap">
                  <div class="d-select">
                    <span class="switch">
                      <span class="switch-wrap">
                        <span class="switch-text">
                          CONTACT A DEALERSHIP FOR:
                        </span>
                        <span class="switch-arrow">
                          <ion-icon name="chevron-down-outline"></ion-icon>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="fs">
                <p class="info">* Required fields</p>
              </div>
              <label class="label label-subtitle">
                Select the model you are interested in
              </label>
              <div class="fs2c">
                <div class="fs">
                  <div class="wrap">
                    <div class="d-select">
                      <span class="switch">
                        <span class="switch-wrap">
                          <span class="switch-text">Family *</span>
                          <span class="switch-arrow">
                            <ion-icon name="chevron-down-outline"></ion-icon>
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="fs">
                  <div class="wrap">
                    <div class="d-select">
                      <span class="switch">
                        <span class="switch-wrap">
                          <span class="switch-text">Model *</span>
                          <span class="switch-arrow">
                            <ion-icon name="chevron-down-outline"></ion-icon>
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="fs2c">
                <div class="fs">
                  <div class="wrap">
                    <div class="d-input-text">
                      <input type="text" placeholder="Name *" />
                    </div>
                  </div>
                </div>
                <div class="fs">
                  <div class="wrap">
                    <div class="d-input-text">
                      <input type="text" placeholder="Last Name *" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="fs">
                <div class="wrap">
                  <div class="d-select">
                    <span class="switch">
                      <span class="switch-wrap">
                        <span class="switch-text">India</span>
                        <span class="switch-arrow">
                          <ion-icon name="chevron-down-outline"></ion-icon>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div class="fs2c">
                <div class="fs">
                  <div class="wrap">
                    <div class="phone">
                      <div class="d-select">
                        <span class="switch">
                          <span class="switch-wrap">
                            <span class="switch-text" title="+91">
                              +91
                            </span>
                            <span class="switch-arrow">
                              <ion-icon name="chevron-down-outline"></ion-icon>
                            </span>
                          </span>
                        </span>
                      </div>
                      <div class="d-input-text">
                        <input type="tel" placeholder="Cell Phone" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="fs">
                  <div class="wrap">
                    <div class="d-input-text">
                      <input
                        type="text"
                        placeholder="E-mail"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="fs">
                <div class="wrap">
                  <div class="d-input-text">
                    <input
                      type="text"
                      placeholder="Insert the name of the location or the dealer you are looking for *"
                    />
                  </div>
                </div>
              </div>

              <div class="fs">
                <div class="wrap">
                  <div class="radios">
                    <p>
                      <strong>
                        Would you like to give us more information to help us
                        get to know you better?
                      </strong>
                    </p>
                    <div class="inputs">
                      <span class="d-radio-button">
                        <input type="radio" id="yes" />
                        <label for="yes" class="label-yes">
                          Yes
                        </label>
                      </span>
                      <span class="d-radio-button">
                        <input type="radio" id="no" />
                        <label for="no" class="label-no">
                          No
                        </label>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <br />
              <br />
              <br />

              <div class="fs">
                <label
                  style={{ marginBottom: "1.5rem" }}
                  class="label label-subtitle"
                >
                  Consent for processing of personal data
                </label>
                <p class="justified">
                  Before proceeding, plase read our
                  <a href="#" class="link">
                    <strong> privacy policy</strong>
                  </a>
                  .
                  <br />I have read and understood the privacy notice and I
                  hereby consent to the processing of my personal data by Ducati
                  Motor Holding S.p.A.:
                </p>

                <div class="wrap">
                  <div class="radios">
                    <div class="inputs">
                      <span class="d-input-checkbox">
                        <input type="checkbox" id="privacy-1" />
                        <label for="privacy-1" class="label">
                          <span class="checkbox-icon">
                            <ion-icon
                              class="checkmark checked"
                              name="checkmark-outline"
                            ></ion-icon>
                          </span>
                          <span class="label-text"></span>
                        </label>
                      </span>
                    </div>
                    <p>
                      for marketing activities via email (newsletters),
                      telephone, text and multimedia messages, chats, banners on
                      our websites and apps, instant messaging, social networks,
                      and conventional mail
                    </p>
                  </div>
                </div>
              </div>

              <div class="fs">
                <div class="wrap">
                  <div class="radios">
                    <div class="inputs">
                      <span class="d-input-checkbox">
                        <input type="checkbox" id="privacy-2" />
                        <label for="privacy-2" class="label">
                          <span class="checkbox-icon">
                            <ion-icon
                              class="checkmark unchecked"
                              name="checkmark-outline"
                            ></ion-icon>
                          </span>
                          <span class="label-text"></span>
                        </label>
                      </span>
                    </div>
                    <p>
                      to understand your preferences through automated
                      individual decision-making activities and better serve you
                    </p>
                  </div>
                </div>
              </div>

              <div class="fs">
                <button type="submit" class="submit-btn">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
