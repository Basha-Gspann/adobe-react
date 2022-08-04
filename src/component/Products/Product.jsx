import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "../../Sass/Product.scss";
import Colorone from "../../Images/color-1.png";
import Colortwo from "../../Images/color-2.png";
import Colorthree from "../../Images/color-3.png";
import Colorfour from "../../Images/color-4.png";
import { BsStarFill, BsStar } from "react-icons/bs";
import { BiShareAlt, BiSitemap } from "react-icons/bi";
import { TbLeaf } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const Product = (props) => {
  const { onAdd,onRemove, cartItems } = props;
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="product-details container">
          <div className="aem-Grid aem-Grid--12 new">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--3 small">
                  <img
                    src={product.image}
                    alt={product.title}
                    height="100px"
                    width="120px"
                  />
                  <img
                    src={product.image}
                    alt={product.title}
                    height="100px"
                    width="120px"
                  />
                  <img
                    src={product.image}
                    alt={product.title}
                    height="100px"
                    width="120px"
                  />
                  <img
                    src={product.image}
                    alt={product.title}
                    height="100px"
                    width="120px"
                  />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 big">
                  <img
                    className="pro-img"
                    src={product.image}
                    alt={product.title}
                    height="400px"
                    width="400px"
                  />
                </div>
              </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <p>Clothing / Women’s / Outerwear</p>
              <h1>{product.title}</h1>
              <h5>${product.price}</h5>
              <BsStarFill size={18} />
              <BsStarFill size={18} />
              <BsStarFill size={18} />
              <BsStarFill size={18} />
              <BsStar size={18} />
              <strong>(175)</strong>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor labore et dolore magna. <a href="/">Read more</a>
              </p>
              <hr />

              <div className="product-colors">
                <h5>Color</h5>
                <img src={Colorone} className="colorone cola" alt="Colorone" />
                <img src={Colortwo} className="colortwo cola" alt="Colortwo" />
                <img src={Colorthree} className="colorthree cola" alt="Colorthree" />
                <img src={Colorfour} className="colorfour cola" alt="Colorfour" />
              </div>
              <div className="size">
                <h5>Sizes</h5>
                <button type="button">XS</button>
                <button type="button">S</button>
                <button type="button">M</button>
                <button type="button">L</button>
                <button type="button">XL</button>
              </div>
              <h5>Quantity</h5>

              <div className="group">
                <p>
                  <button className="border" onClick={() => onRemove(product)}>-</button>&nbsp;&nbsp;
                  <span className="quant">{cartItems?.find((x) => x.id === product.id)?.qty || 1}</span>&nbsp;&nbsp;
                  <button className="border" onClick={() => onAdd(product)}>+</button>
                </p>
                </div>
              <button className="addtocart" onClick={() => onAdd(product)}>
                ADD TO CART
              </button>
              <div className="save">
                <a href="#">
                  <AiOutlineHeart size={25} /> &nbsp;save
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#">
                  <BiShareAlt size={25} />
                  &nbsp;share
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="Producttitle container">
          <div className="aem-Grid aem-Grid--12">
            <h1>{product.title}</h1>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <h5>Description</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor labore dolore magna lorem ipsum dolor sit amet
                ipsum dolor sit amet, consectetur. Duis tristique sollicitudin
                nibh sit amet. Tellus integer feugiat scelerisque varius morbi
                enim nunc faucibus.
              </p>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
            <h5> Details</h5>
              <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6">
                  <div className="Details">
                    <h6>
                      <TbLeaf size={22} />
                      &nbsp;&nbsp;&nbsp;Sweat-wicking
                    </h6>
                    <h6>
                      <BiSitemap size={22} />
                      &nbsp;&nbsp;&nbsp;Breathable
                    </h6>
                  </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6">
                  <div className="detailsone">
                    <h6>
                      <BiSitemap size={22} />
                      &nbsp;&nbsp;&nbsp;Lightweight fabric
                    </h6>
                    <h6 className="detailstwo">
                      <TbLeaf size={22} />
                      &nbsp;&nbsp;&nbsp;69% nylon, 31% lycra
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct onAdd={onAdd} />}
        </div>
      </div>
    </div>
  );
};

export default Product;
