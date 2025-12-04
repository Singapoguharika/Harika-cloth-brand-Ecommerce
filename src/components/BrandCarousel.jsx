import React from "react";
import Marquee from "react-fast-marquee";

const brands = [
  { name: "Nike", img: "https://1000logos.net/wp-content/uploads/2016/10/Nike-Logo.png", offer: "Up to 50% Off" },
  { name: "Adidas", img: "https://1000logos.net/wp-content/uploads/2016/10/Adidas-Logo.png", offer: "Flat 40% Off" },
  { name: "Puma", img: "https://1000logos.net/wp-content/uploads/2017/06/Puma-logo.png", offer: "Extra 20% Off" },
  { name: "Reebok", img: "https://1000logos.net/wp-content/uploads/2017/04/Reebok-Logo.png", offer: "Buy 1 Get 1" },
  { name: "Levis", img: "https://1000logos.net/wp-content/uploads/2017/05/Levis-logo.png", offer: "Clearance Sale" },
  { name: "Under Armour", img: "https://1000logos.net/wp-content/uploads/2016/11/Under-Armour-logo.png", offer: "Flat 30% Off" },
  { name: "Fila", img: "https://1000logos.net/wp-content/uploads/2021/04/Fila-Logo.png", offer: "Limited Offer" },
  { name: "New Balance", img: "https://1000logos.net/wp-content/uploads/2017/06/New-Balance-logo.png", offer: "Up to 25% Off" },
];

const BrandCarousel = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fs-2 fw-bold">Grand Global Brands</h2>
        <p className="fs-5 text-secondary">
          Top brands. Amazing offers. Don’t miss out!
        </p>
      </div>

      <Marquee gradient={false} speed={50}>
        {brands.map((brand, index) => (
          <div
            key={index}
            className="text-center mx-3 p-2"
            style={{ minWidth: "150px", cursor: "pointer" }}
          >
            <div
              className="rounded-circle overflow-hidden mb-2"
              style={{ width: "150px", height: "150px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", transition: "0.3s", backgroundColor: "#fff" }}
            >
              <img
                src={brand.img}
                alt={brand.name}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <p className="fw-semibold mb-1">{brand.name}</p>
            <p className="text-danger mb-0" style={{ fontSize: "0.85rem" }}>{brand.offer}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandCarousel;
