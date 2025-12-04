import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img
            className="card-img img-fluid"
            src="./assets/cloth-banner.jpg"
            alt="Banner"
            style={{
              width: "100%",       // full width
              height: "100vh",     // full viewport height
              objectFit: "cover"   // keeps aspect ratio, fills screen
            }}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container text-center">
              <h3 className="card-title fs-2 fw-bold text-white">
                New Season Arrivals
              </h3>

              <p className="card-text fs-5 fw-semibold" style={{ color: "#ffffffff" }}>
                This is a wider card with supporting text below as a natural
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
