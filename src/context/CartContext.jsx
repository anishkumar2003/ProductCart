import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((p)=>[...p,product])
    };

    return (
        <CartContext.Provider value={{ cart, addToCart,setCart }}>
            {children}
        </CartContext.Provider>
    );
};

function useCart() {
    return useContext(CartContext);
}

export { useCart, CartProvider };
