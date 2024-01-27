import { useEffect, useState } from "react";
import { Products } from "../index";
import "./ProductStore.css";
import fakeStoreApi from "../../api/FakeStoreApi.js";

function ProductStore() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fakeStoreApi.getAllProducts().then(data => setProducts(data));
    fakeStoreApi.getAllCategories().then(data => setCategories(data));
  }, []);

  const categoryChoseHandler = (cat = null) => {
    cat == null
      ? fakeStoreApi.getAllProducts().then(data => setProducts(data))
      : fakeStoreApi.getProductsByCategory(cat).then(data => setProducts(data));
  };

  const changeHandler = e => {
    let id = e.target.value;
    fakeStoreApi
      .searchProductById(parseInt(id))
      .then(data => setProducts([data]))
      .catch(err => setProducts([]));
  };

  return (
    <div className="home">
      <h1>Our Products</h1>
      <div className="home-body">
        <div className="home-categories flex">
          <span onClick={() => categoryChoseHandler()}>All</span>
          {categories.map((cat, index) =>
            <span key={index} onClick={() => categoryChoseHandler(cat)}>
              {cat}
            </span>
          )}
        </div>
        <div className="search flex">
          <input
            type="text"
            name=""
            placeholder="Search product by id ..."
            onChange={changeHandler}
          />
        </div>
        <div className="products">
          {products.length > 0
            ? <Products products={products} />
            : <div style={{ fontWeight: "bold" }}>No products</div>}
        </div>
      </div>
    </div>
  );
}

export default ProductStore;
