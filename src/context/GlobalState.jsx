import { createContext, useContext, useReducer } from "react";
import { TYPES } from "../actions/cartActions";
import {
  initialState,
  shoppingCartReducer,
} from "../reducer/shoppingCartReducer";

const AppContext = createContext();

export const GlobalState = ({ children }) => {
  const [{ cart }, dispatch] = useReducer(shoppingCartReducer, initialState);

  const numberOfItemsInCart = cart?.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const priceTotal = cart?.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <AppContext.Provider
      value={{
        addToCart,
        deleteFromCart,
        clearCart,
        cart,
        numberOfItemsInCart,
        priceTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
