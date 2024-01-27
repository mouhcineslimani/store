import ReactDOM from "react-dom/client";
import App from "./App";
import { useCart, CartProvider } from "./hook/useContextCartProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
