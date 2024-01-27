import { createContext, useContext, useReducer } from "react";

const initialState = {
  products: [],
  total: 0
};

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.payload.product;
      const existingProduct = state.products.find(
        item => item.id === newItem.id
      );

      if (existingProduct) {
        // Si le produit existe déjà, augmentez sa quantité et changer le prix
        const updatedProducts = state.products.map(
          item =>
            item.id === newItem.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  price: item.price + newItem.price // Ajoutez le prix du nouvel élément
                }
              : item
        );

        return {
          ...state,
          products: updatedProducts,
          total: state.total + newItem.price // Ajoutez le prix du nouvel élément au total
        };
      } else {
        // Si le produit n'existe pas, ajoutez-le avec la quantité 1
        return {
          ...state,
          products: [...state.products, { ...newItem, quantity: 1 }],
          total: state.total + newItem.price // Ajoutez le prix du nouvel élément au total
        };
      }

    case "REMOVE_ITEM_CART":
      const removedItem = state.products.find(
        item => item.id === action.payload.id
      );

      if (removedItem) {
        const updatedProducts = state.products.filter(
          item => item.id !== action.payload.id
        );

        // Calculate the new total
        const newTotal = updatedProducts.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );

        return {
          ...state,
          products: updatedProducts,
          total: newTotal
        };
      }
      // If the item is not found, return the current state
      return state;

    case "UPDATE_ITEM_CART":
      return {
        ...state,
        products: state.products.map(
          item =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
        )
      };

    case "UPDATE_QUANTITY":
      const { val, type, id } = action.payload;
      const productListUpdated = state.products.map(prd => {
        if (prd.id === id) {
          if (type === "inputChange") return { ...prd, quantity: val };
          else return { ...prd, quantity: prd.quantity + val };
        }
        return prd;
      });

      // Calculate the total based on the updated product list
      const newTotal = productListUpdated.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        ...state,
        products: productListUpdated,
        total: newTotal
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Define context values
  const contextValues = {
    state,
    dispatch
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
