import Button from "./components/Button";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";

function App(){
  const cars=["BMW","AUDI","Alto"]
  return(
    <div className="">
      <Navbar/>
      <ProductList/>
      <Cart/>
    </div>
  )
}
export default App;