import { FaShoppingBag } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
function Navbar() {
  return (
    <div className="w-full bg-navColor h-15 flex justify-evenly items-center text-white text-xl font-bold sticky md:justify-between md:px-5 ">
      <div className="flex items-center gap-2">
        <FaShoppingBag size={35} style={{ fill: "orange" }} />
        <h1 className="text-white font-bold text-xl">Shopping Cart</h1>
      </div>
      <div className="flex items-center">
        <h1 className="mr-5">Home</h1>
        <FiShoppingCart  size={35} className="text-orange-400" />
        <div className="w-4 h-4 flex items-center justify-center border-4 border-amber-500 rounded-full bg-amber-400 font-bold text-xs text-white relative right-3 bottom-2">
          3
        </div>
      </div>
    </div>
  );
}

export default Navbar;
