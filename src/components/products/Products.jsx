import React, { useEffect, useState } from "react";
import { Product } from "../index";
import FakeStoreApi from "../../api/FakeStoreApi";
import { useLocation, useParams } from "react-router-dom";
import usePagination from "../../hook/usePagination";

function Products({ products }) {
  const [productList, setProductList] = useState([]);
  const [category, setCategory] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  // Use the usePagination hook
  const itemsPerPage = 6;
  const { currentItems, pageNumbers, paginate } = usePagination(
    itemsPerPage,
    productList
  );

  useEffect(
    () => {
      const currentPath = location.pathname;
      if (currentPath.includes("categories/show") && id !== undefined) {
        setCategory(id);
        FakeStoreApi.getProductsByCategory(id).then(data => {
          setProductList(data);
        });
        return;
      }

      if (products === undefined) {
        FakeStoreApi.getAllProducts().then(data => setProductList(data));
      } else {
        setProductList(products);
      }

      setCategory(null);
    },
    [id, products, location.pathname]
  );

  return (
    <div className="container">
      <h1 className="title">
        Our Products {category && ` : ${category}`}
      </h1>
      <div className="products grid">
        {currentItems.map(product =>
          <Product key={product.id} product={product} />
        )}
      </div>
      {pageNumbers.length > 1 &&
        <div className="pagination">
          {pageNumbers.map(number =>
            <span key={number} onClick={() => paginate(number)}>
              {number}
            </span>
          )}
        </div>}
    </div>
  );
}

export default Products;
