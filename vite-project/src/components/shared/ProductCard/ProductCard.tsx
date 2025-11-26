import './ProductCard.css'
import type ProductModel from '../../../models/ProductModel'

interface ProductCardProps {
    product: ProductModel
}

export default function ProductCard(props: ProductCardProps ) {
  return (
    <div className='ProductCard'>
        <img src={props.product?.images[0]} alt="image" />
        <h3>{props.product?.title}</h3>
        <p>{props.product?.description}</p>
         <p>{props.product?.price}</p>
          <p>{props.product?.rating}</p>
           <p>{props.product?.stock}</p>
            <p>{props.product?.category}</p>
    </div>
  )
}
