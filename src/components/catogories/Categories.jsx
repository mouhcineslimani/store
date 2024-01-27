import React, { useEffect, useState } from "react";
import { Category } from "../index";
import FakeStoreApi from "../../api/FakeStoreApi";
import "./Categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    FakeStoreApi.getAllCategories().then(data => setCategories(data));
  }, []);
  return (
    <div className="categories flex">
      <h1>Our Categories</h1>
      <div className="list flex">
        {categories.map(cat => <Category key={cat} category={cat} />)}
      </div>
    </div>
  );
}

export default Categories;
