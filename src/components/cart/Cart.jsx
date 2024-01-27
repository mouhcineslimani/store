import "./Cart.css";
import { useCart } from "../../hook/useContextCartProvider";
import CartItem from "./CartItem";
import usePagination from "../../hook/usePagination";

function Cart() {
  const { state } = useCart();
  const itemsPerPage = 5;

  const { currentItems, pageNumbers, paginate } = usePagination(
    itemsPerPage,
    state.products
  );

  const renderItems = currentItems.map((prd, index) =>
    <CartItem key={index} product={prd} />
  );

  return (
    <div className="shopping-cart-container">
      <h1 className="shopping-cart-title">Shopping Cart</h1>
      <div className="shopping-cart-content">
        <div>
          <div className="data-table">
            <div className="table-row header">
              <div className="table-cell">Image</div>
              <div className="table-cell">Unit Price</div>
              <div className="table-cell">Total Price</div>
              <div className="table-cell">Quantity</div>
              <div className="table-cell">Actions</div>
            </div>
            {state.products.length > 0
              ? renderItems
              : <div
                  className="table-row"
                  style={{
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  No item in cart
                </div>}
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
        <div className="totals">
          <div className="totals-item">
            <label>Subtotal</label>
            <div className="totals-value" id="cart-subtotal">
              {state.total.toFixed(2)} $
            </div>
          </div>
          <div className="totals-item">
            <label>Tax (5%)</label>
            <div className="totals-value" id="cart-tax">
              {(state.total * (5 / 100)).toFixed(2)} $
            </div>
          </div>
          <div className="totals-item">
            <label>Shipping</label>
            <div className="totals-value" id="cart-shipping">
              15.00 $
            </div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Grand Total</label>
            <div className="totals-value" id="cart-total">
              {(state.total + state.total * (5 / 100) + 15.0).toFixed(2)} $
            </div>
          </div>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
