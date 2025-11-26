
import { useEffect, useState } from 'react';
import type ProductModel from '../../../models/ProductModel';
import './Home.css'
import { productService } from '../../../services/ProductService';
import ProductCard from '../../shared/ProductCard/ProductCard';

export default function Home() {


const [randomProduct, setRandomProduct] = useState<ProductModel | null>(null);

    useEffect(()=>{
      (async()=>{
        try{

          const fetchProducts = await productService.getProducts();
          const randomIndex = Math.floor(Math.random() * fetchProducts.length);
          const randomProduct = fetchProducts[randomIndex];
          setRandomProduct(randomProduct);
         }catch (error){
          console.log(error);
         }
           
      })();
    },[])

    

  return (
    <div className='Home'>
      <h1>welcome!!!</h1>
      <div className="home-container"></div>
        <div className="left-part">
          <h2>Discover Our Exclusive Collection!</h2>
          <p>Explore a wide range of products tailored to meet all your needs. From the latest gadgets to timeless classics.</p>
          <button>Shop Now</button>
          <button>Change Card</button>
        </div>
      <ProductCard product={randomProduct} />
    </div>
  )
}
