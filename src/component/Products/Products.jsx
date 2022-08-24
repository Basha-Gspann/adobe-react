import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import ReactPaginate from "react-paginate";
import "../../Sass/Products.scss";
import { FiHeart } from "react-icons/fi";
import { getProductData } from "../Api/ProductsApi";
import store from "../../redux/store";
import "../../Sass/Filter.scss";



const itemsPerPage = 12;

const Products = ({ category }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  // fetchproducts (() => {
  //   const getProduct = async () => {
  //     const ProductData = await getProductData();
  //     console.log(ProductData, 'inproduct page');
  //   };
  //   getProduct();
  // })

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      // const response = await fetch("https://fakestoreapi.com/products");
      const response = await getProductData();

      if (componentMounted) {
        const proddata = store.getState();
        setData(proddata.allProducts.products);

        const data = proddata.allProducts.products;
        setFilter(proddata.allProducts.products);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (category) {
      setFilter(data.filter((value) => value.category === category));
    }
  }, [category]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
          {/* <Skeleton height={350} />
          <Skeleton height={350} /> */}
        </div>
      </>
    );
  };

  const filterProduct = (cat,checked) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(filter.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(filter.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % filter.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    
    return (
      <>
        <div className="aem-Grid aem-Grid--12">
          <div className="aem-GridColumn aem-GridColumn--default--3">
          <div className="filter">
          <h4>Filters</h4>
            <hr />
          <ul>
            <li>
              <input
                onClick={() => filterProduct("men's clothing")}
                type="checkbox"
                id="option"
                name="option"
                value="option"
              />
              <label>Men</label>
            </li>

            <li>
              
                <input
                  onClick={() => filterProduct("women's clothing")}
                  type="checkbox"
                  id="option"
                  name="option"
                  value="option"
                />
                <label>
                Women
              </label>
            </li>

            <li>
              <input
                onClick={() => filterProduct("jewelery")}
                type="checkbox"
                id="option"
                name="option"
                value="option"
              />
              <label>Smart Gear</label>
            </li>

            <li>
              <input
                onClick={() => filterProduct("electronics")}
                type="checkbox"
                id="option"
                name="option"
                value="option"
              />
              <label>Accessories</label>
            </li>
          </ul>
        </div>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
          <div className="row">
          {currentItems?.map((product) => {
          return (
            <>
              <div className="col-md-4 col-sm-6 col-6">
                    <div className="card h-100 text-center" key={product.id}>
                      <NavLink to={`/products/${product.id}`}>
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt={product.title}
                          height="250px"
                        />
                      </NavLink>
                      <div className="card-body">
                        <h5 className="card-title mb-0 fw-bold">
                          {product.title.substring(0, 18)}
                        </h5>
                        <p className="card-text lead ">${product.price}</p>
                        <FiHeart size={25} color={"black"} />
                      </div>
                    </div>
                  </div>
            </>
          );
        })}
        <div className="page">
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< "
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
          </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="product">
      <div className="">
        <div className="row"></div>
        <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </div>
  );
};

export default Products;
