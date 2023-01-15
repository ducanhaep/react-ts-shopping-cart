import { useContext, createContext, ReactNode } from "react";

interface ShoppingCartProviderProps {
  children: ReactNode;
}
const initialState = {
  quantity: 0,
};
const ShoppingCartContext = createContext(initialState);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  return (
    <ShoppingCartContext.Provider value={{}}></ShoppingCartContext.Provider>
  );
}

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}
