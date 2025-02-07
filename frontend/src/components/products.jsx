import { useEffect, useState } from "react";
import '../css/product.css';
import axios from 'axios';
import Priceconversion from "../ui-cards/priceconversion";

export default function Product() {
    const [products,setProducts] = useState([]);
    const [Loading,setLoading]= useState(true)
  
useEffect(()=>{

    axios.get('/products').
    then((response)=>{
       
        setProducts(response.data);
        setLoading(false)


}).catch((error)=>{
    console.log("error in fetching data",error)
})

},[])




  return (
    <div className="product-container">
      <h1 className="product-title">Our Products</h1>

      
      
     {Loading? <h1>loading..</h1>:(
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <h2 className="product-name">{product.title}</h2>
              <p className="product-price"><Priceconversion price={product.price}/></p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
        )}
      
    </div>
  );
}
