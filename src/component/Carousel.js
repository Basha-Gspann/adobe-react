import Carousel from "react-elastic-carousel";
// import Item from "./Item";
import "../Sass/Cart.scss";
import React, { useState, useEffect } from "react";

const Carouse = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      setProduct(await response.json());
      setLoading(false);
      console.log(1);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">Loding...</div>/
      </>
    );
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];

  const ShowProduct = () => {
    return (
      <>
        <div className="caro">
          <Carousel breakPoints={breakPoints}>
            <div>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                height="250px"
              />
            </div>
            <div>
              <img
                src="https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?w=329&h=185&c=7&o=5&dpr=1.25&pid=1.7"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div>
              <img
                src="https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?w=329&h=185&c=7&o=5&dpr=1.25&pid=1.7"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div>
              <img
                src="https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?w=329&h=185&c=7&o=5&dpr=1.25&pid=1.7"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div>
              <img
                src="https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?w=329&h=185&c=7&o=5&dpr=1.25&pid=1.7"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div>
              <img
                src="https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?w=329&h=185&c=7&o=5&dpr=1.25&pid=1.7"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div>
              <img
                src="https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?w=329&h=185&c=7&o=5&dpr=1.25&pid=1.7"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div>
              <img
                src="https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?w=329&h=185&c=7&o=5&dpr=1.25&pid=1.7"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          </Carousel>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Carouse;
