import { useCart } from "../context/CartContext";

function Cart() {
    const { cart, setCart } = useCart();

    // Function to remove item from cart
    function removeFromCart(id) {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    }

    // Calculate total price
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="p-4 w-full max-w-md mx-auto bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Shopping Cart</h2>

            {cart.length === 0 ? (
                <h1 className="text-gray-500">Your cart is empty</h1>
            ) : (
                <ul className="space-y-3">
                    {cart.map((item) => (
                        <li key={item.id} className="flex justify-between items-center border-b pb-2">
                            <div className="flex items-center gap-3">
                                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                                <span className="font-medium">{item.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-purple-600 font-bold">${item.price}</span>
                                <button 
                                    className="text-red-500 font-bold hover:text-red-700 cursor-pointer" 
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    ❌
                                </button>
                            </div>
                        </li>
                    ))}
                    {/* Total Price Row */}
                    <li className="flex justify-between items-center font-bold text-lg mt-3">
                        <span>Total:</span>
                        <span className="text-green-600 mr-5">${totalPrice.toFixed(2)}</span>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Cart;
