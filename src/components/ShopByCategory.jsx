import React from "react";

const categories = [
  { name: "Men", img: "./assets/menwear.jpg" },
  { name: "Women", img: "./assets/woman-posing-stylish-summer-fashion-bag-colorful-mood.jpg" },
  { name: "Kids", img: "./assets/smiley-little-girl-with-winter-clothing-bags (1).jpg" },
  { name: "Home & Living", img: "./assets/smiling-young-girl-speaks-phone-sitting-sofa-coffee-table-living-room.jpg" },
  { name: "Beauty", img: "./assets/still-life-care-products.jpg" },
  { name: "Genz", img: "./assets/friends-posing-while-out-city.jpg" },
  { name: "Gift Cards", img: "./assets/beautiful-gift-voucher-with-hand.jpg" },
];

const ShopByCategory = () => {
  return (
    <div className="container my-5">
      <h2 className="fs-3 fw-bold mb-4">Shop By Category</h2>
      <div className="d-flex flex-row flex-nowrap overflow-auto gap-3">
        {categories.map((category, index) => (
          <div
            key={index}
            className="text-center"
            style={{ minWidth: "150px", cursor: "pointer" }}
          >
            <img
              src={category.img}
              alt={category.name}
              className="img-fluid rounded mb-2"
              style={{ height: "150px", objectFit: "cover", width: "150px" }}
            />
            <p className="mb-0 fw-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
