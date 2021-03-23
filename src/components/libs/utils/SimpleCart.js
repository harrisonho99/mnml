import './utilStyle/SimpleCart.css';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;

const SimpleCart = ({ prodURL, imgURL, name, color, price }) => {
  return (
    <article>
      <Link to={`/product/${prodURL}`}>
        <Card
          className='simple-card'
          hoverable
          style={{ width: '100%' }}
          cover={
            <div className='simple-card-image-wrapper'>
              <img src={imgURL} alt={name} className='simple-cart-img' />
            </div>
          }
        >
          <Meta title={name.toUpperCase()} description={price + '$'}></Meta>
          <p>{color.toUpperCase()}</p>
        </Card>
      </Link>
    </article>
  );
};
export default SimpleCart;
