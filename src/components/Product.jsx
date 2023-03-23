import React from "react";
import Zoom from "react-reveal/Zoom";
import product1 from "../assets/images/product/product1.png";
import product2 from "../assets/images/product/product2.png";
import product3 from "../assets/images/product/product3.png";
import product4 from "../assets/images/product/product4.png";
import arrow from "../assets/images/product/arrow.svg";

const Product = () => {
  const products = [
    {
      id: 1,
      img: product1,
      name: "product name",
      price: "$00.00",
      discountPrice: "$00.00",
      delay: 800,
    },
    {
      id: 2,
      img: product2,
      name: "product name",
      price: "$00.00",
      discountPrice: "$00.00",
      delay: 1000,
    },
    {
      id: 3,
      img: product3,
      name: "product name",
      price: "$00.00",
      discountPrice: "$00.00",
      delay: 1200,
    },
    {
      id: 4,
      img: product4,
      name: "product name",
      price: "$00.00",
      discountPrice: "$00.00",
      delay: 1300,
    },
  ];

  return (
    //------------ product section ----------
    <section className="product-section">
      <div className="container">
        {/*----------- section title ------------ */}
        <div
          className="product-section-title"
          data-aos="fade-down"
          data-aos-delay="800"
          data-aos-duration="1000"
        >
          <h5 className="font-inter">ONLINE STORE</h5>
          <h2>Discover Sweet Delicious</h2>
        </div>

        {/*--------- product box ---------- */}
        <div className="products">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <div className="product-img">
                <Zoom top duration={1500} delay={product.delay}>
                  <img src={product.img} alt="" />
                </Zoom>
              </div>
              <button>add to cart</button>
              <div
                className="product-content"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="1000"
              >
                <h2 className="font-inter">{product.name}</h2>
                <p className="font-inter">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="product-button">
          <button
            data-aos="zoom-in"
            data-aos-delay="1800"
            data-aos-duration="1000"
          >
            online store
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
