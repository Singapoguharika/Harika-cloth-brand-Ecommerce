import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light pt-5">
        <div className="container">

          {/* Top Sections */}
          <div className="row">

            {/* Online Shopping */}
            <div className="col-md-3 col-sm-6 mb-4">
              <h5 className="fw-bold">ONLINE SHOPPING</h5>
              <ul className="list-unstyled">
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Home</li>
                <li>Beauty</li>
                <li>Genz</li>
                <li>Gift Cards</li>
                <li>Harika Insider</li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="col-md-3 col-sm-6 mb-4">
              <h5 className="fw-bold">USEFUL LINKS</h5>
              <ul className="list-unstyled">
                <li>Blog</li>
                <li>Careers</li>
                <li>Site Map</li>
                <li>Corporate Information</li>
                <li>Whitehat</li>
                <li>Cleartrip</li>
              </ul>
            </div>

            {/* Customer Policies */}
            <div className="col-md-3 col-sm-6 mb-4">
              <h5 className="fw-bold">CUSTOMER POLICIES</h5>
              <ul className="list-unstyled">
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Track Orders</li>
                <li>Shipping</li>
                <li>Returns & Cancellation</li>
              </ul>
            </div>

            {/* App & Social */}
            <div className="col-md-3 col-sm-6 mb-4">
              <h5 className="fw-bold">EXPERIENCE HARIKA APP ON MOBILE</h5>
              <p>Download the app for best experience</p>
              <div className="d-flex mb-2">
                <img src="./assets/playstore.png" alt="Play Store" style={{ width: "120px", marginRight: "5px" }} />
                <img src="./assets/appstore.png" alt="App Store" style={{ width: "120px" }} />
              </div>
              <h6>KEEP IN TOUCH</h6>
              <div className="d-flex gap-2 mt-2">
                <i className="fab fa-facebook fa-lg"></i>
                <i className="fab fa-instagram fa-lg"></i>
                <i className="fab fa-twitter fa-lg"></i>
                <i className="fab fa-youtube fa-lg"></i>
              </div>
            </div>

          </div>

          <hr className="border-light" />

          {/* Bottom Info */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 small">
            <p>© 2025 Harika Cloth Brand Ecommerce. All rights reserved.</p>
            <p>Hyderabad</p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
