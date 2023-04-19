import productData from '../data'
import { Link } from 'react-router-dom'


const Products = () => {
  const productElements = productData.map(product => {
    return (
      <article className='products' key={product.id} style={{marginBottom:'5px', borderBottom:"1px solid gray"}}>
        <Link to={`${product.id}`}>
          {product.name}
        </Link>
      </article>
    )
  })

  return (
      <section className='section'>
        {productElements}

      </section>
  );
};

export default Products;
