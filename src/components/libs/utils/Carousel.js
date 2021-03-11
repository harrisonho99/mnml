import { Carousel } from 'antd';
import './utilStyle/Carousel.css';
const CarouselWrapper = ({ speed = 4000, auto = false, data }) => {
  return (
    <div className='carousel-wrapper'>
      <Carousel autoplay={auto} autoplaySpeed={speed}>
        <div className='carousel-item-wrapper'>
          <div className='carousel-item'>
            <img
              src='https://storage.covet.pics/postassets/7547410/high_resolution/7c50430ef36106e80691b756579de158'
              alt=''
            />
          </div>
        </div>
        <div className='carousel-item-wrapper'>
          <div className='carousel-item'>
            <img
              src='https://cdn.shopify.com/s/files/1/1300/6871/products/loose-woven-flannel-shirt-greenblack-2_650x975.jpg?v=1564134534'
              alt=''
            />
          </div>
        </div>
        <div className='carousel-item-wrapper'>
          <div className='carousel-item'>
            <img
              src='https://storage.covet.pics/postassets/7543911/high_resolution/44840bcffbd0897b36be2ca6c0820b2b'
              alt=''
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default CarouselWrapper;
