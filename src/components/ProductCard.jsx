import Button from "./Button";

function ProductCard({ image, name, price }) {
    return (
        <div className="w-52 h-72 border-2 border-gray-300 rounded-lg shadow-md flex flex-col items-center p-4 gap-2 bg-white hover:shadow-lg transition">
            {/* Product Image */}
            <img src={image} alt={name} className="w-32 h-32 object-cover rounded-md" />

            {/* Product Name */}
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

            {/* Price */}
            <div className="text-md font-bold text-purple-600">${price}</div>

            {/* Add to Cart Button */}
            <Button text="Add to Cart" />
        </div>
    );
}

export default ProductCard;
