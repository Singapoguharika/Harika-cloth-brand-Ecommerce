import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/cloth-banner.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
         <h2 className="card-title fs-1 fw-bold text-dark">
  New Season Arrivals
</h2>

<p className="card-text fs-5 fw-semibold" style={{ color: "#2f7dd1" }}>
  This is a wider card with supporting text below as a natural
  lead-in to additional content. This content is a little bit longer.
</p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
