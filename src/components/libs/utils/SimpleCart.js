import { Card } from 'antd';
import './utilStyle/SimpleCart.css';
const { Meta } = Card;

const SimpleCart = ({ prodURL, imgURL, name, color, price }) => {
  return (
    <article className='simple-cart'>
      <div className='simple-card-image-wrapper'>
        <a href={`/product/${prodURL}`}>
          <img src={imgURL} alt={name} className='simple-cart-img' />
        </a>
      </div>
      <div className='simple-cart-info-wrapper'>
        <a href={`/product/${prodURL}`}>
          <h3>{name}</h3>
        </a>
        <p className='simple-cart-color' style={{ color: color }}>
          {color.toUpperCase()}
        </p>
        <p>${price}</p>
      </div>
    </article>
  );
};
export default SimpleCart;
