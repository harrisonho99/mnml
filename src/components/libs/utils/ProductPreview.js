import { PRODUCT_DETAIL } from '../../../helper/_listNavURL';
import {
  makeStyles,
  Container,
  Paper,
  Grid,
  useMediaQuery,
} from '@material-ui/core';
import { Statistic, Button } from 'antd';
import {
  LikeOutlined,
  UserOutlined,
  StarOutlined,
  StarFilled,
} from '@ant-design/icons';
import { useState, useEffect, useRef } from 'react';
import './utilStyle/ProductPreview.css';
import BlackButton from './BlackButton';
const useStyles = makeStyles((theme) => {
  return {
    starIcon: {
      fontSize: 25,
      height: 'fit-content',
    },
    starWrapper: {
      // verticalAlign: 'middle',
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      paddingRight: 10,
    },
  };
});

const ProductPreview = () => {
  const classes = useStyles();
  const matchesMedia = useMediaQuery('(min-width:1000px)');
  const [showedImage, setShowedImage] = useState(PRODUCT_DETAIL.imageURL[0]);
  useEffect(() => {}, []);
  const handleSelectedImage = (event) => {
    const selectedNode = event.target;
    const parentNode = document.querySelector('.desk-images-select');
    const nodeList = Array.from(parentNode.childNodes);
    nodeList.forEach((node) => {
      node.id = '';
    });
    selectedNode.id = 'desk-image-preview-selected';
    setShowedImage(selectedNode.src);
  };
  return (
    <div id='product-preview-wrapper'>
      {matchesMedia ? (
        <>
          <div className='desk-images-preview-container'>
            <div className='desk-images-select'>
              {PRODUCT_DETAIL.imageURL.map((url) => {
                return (
                  <img
                    key={url}
                    onClick={handleSelectedImage}
                    src={url}
                    alt='preview'
                    className='desk-image-select'
                    draggable='false'
                  />
                );
              })}
            </div>
            <div className='desk-image-showed-container'>
              <div className='desk-image-showed-container'>
                <img
                  src={showedImage}
                  alt='Preview'
                  className='desk-image-showed'
                />
              </div>
            </div>
            <div className='desk-side-detail'>
              <div className='desk-detail-price'>
                <h2>${PRODUCT_DETAIL.price}</h2>
                <p className='sale-desc'>
                  4 interest-free payments of $16.00.
                  <b>Klarna</b>
                </p>
              </div>
              <div className='desk-detail-review'>
                <Statistic
                  title='Feedback: '
                  value={'112'}
                  prefix={
                    <div className={classes.starWrapper}>
                      <StarFilled className={classes.starIcon} />
                      <StarFilled className={classes.starIcon} />
                      <StarFilled className={classes.starIcon} />
                      <StarFilled className={classes.starIcon} />
                      <StarFilled className={classes.starIcon} />
                      <StarOutlined className={classes.starIcon} />
                    </div>
                  }
                />
              </div>
              <div className='desk-size-select'>
                {PRODUCT_DETAIL.sizeAvailable.map((size) => {
                  return (
                    <Button type='default' className='desk-select-size-btn'>
                      {size.toUpperCase()}
                    </Button>
                  );
                })}
              </div>
              <div className='desk-cart-btn'>
                <BlackButton>ADD TO BAG</BlackButton>
              </div>
              <div className='desk-desc'>
                <p>{PRODUCT_DETAIL.description}</p>
              </div>
              <div className='desk-detail'>
                <h4>Details:</h4>
                <ul>
                  {PRODUCT_DETAIL.detail.map((detail) => {
                    return <li className='detail'>{detail}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='mobile-images-preview-container'></div>
        </>
      )}
    </div>
  );
};

export default ProductPreview;
