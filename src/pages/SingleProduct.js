import {useParams, Link} from 'react-router-dom'
import productData from '../data'

const SingleProduct = () => {
  const { productId } = useParams()
  const product = productData.find(product => product.id == productId)

  return (
    <section className='section product'>
      <img src={product.image} className='product'/>
      <br />
      <h3>{product.name}</h3>
      <Link to='..' className='btn'>Back</Link>
    </section>
  );
};

export default SingleProduct;
