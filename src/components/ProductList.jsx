import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import productData from "../Data/Products.json";

function ProductList() {
    const [products, setProducts] = useState([
        {
            "id": 1,
            "name": "Wireless Headphones",
            "price": 49.99,
            "image": "/images/headphones.png"
          }
    ]);

    useEffect(() => setProducts(productData), []); 

    return (
        <div className=" flex flex-col justify-center items-center md:flex md:flex-row  gap-4 m-4 ">
            {products.map((m)=><ProductCard key={m.id} product={m}/>)}
        </div>
    );
}

export default ProductList;
