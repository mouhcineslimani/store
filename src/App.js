import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Main,
  ProductStore,
  Products,
  Categories,
  Contact,
  NotFound,
  Product,
  Cart
} from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<ProductStore />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/show/:id" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
