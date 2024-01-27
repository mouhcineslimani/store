import React from "react";
import { Link } from "react-router-dom";

function Category({ category }) {
  return (
    <div className="category-card flex">
      <div className="category-card-title">
        {category}
      </div>
      <Link className="category-card-link" to={`/categories/show/${category}`}>
        View Products
      </Link>
    </div>
  );
}

export default Category;
