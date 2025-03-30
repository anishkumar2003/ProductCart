import Button from "./Button";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="w-62 h-72 border-2 border-gray-300 rounded-lg shadow-md flex flex-col items-center p-4 gap-2 bg-white hover:shadow-lg hover:scale-105 transition transform">
            {/* Product Image */}
            <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-md" />

            {/* Product Name */}
            <h2 className="text-lg font-semibold text-gray-800 text-center">{product.name}</h2>

            {/* Price */}
            <div className="text-md font-bold text-purple-600">${product.price}</div>

            {/* Add to Cart Button */}
            <Button text="Add to Cart" onClick={() => addToCart(product)} />
        </div>
    );
}

export default ProductCard;
