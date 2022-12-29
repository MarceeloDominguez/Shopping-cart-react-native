import { createContext, useContext, useReducer } from "react";
import Products from "../data/data";
import { shoppingCartReducer } from "../reducer/shoppingCartReducer";

const initialState = {
  Products,
  cart: [],
};

const AppContext = createContext();

export const GlobalState = ({ children }) => {
  const [{ cart }, dispatch] = useReducer(shoppingCartReducer, initialState);

  const numberOfItemsInCart = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const addToCart = (id) => {
    dispatch({ type: "add_to_cart", payload: id });
  };

  return (
    <AppContext.Provider value={{ addToCart, cart, numberOfItemsInCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
