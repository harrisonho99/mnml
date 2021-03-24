import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeStyles, Container, Paper, Grid } from '@material-ui/core';
import { PRODUCT_DETAIL } from '../../helper/_listNavURL';
import ProductPreview from '../libs/utils/ProductPreview';

const ProductPage = (props) => {
  const { id } = useParams();

  return (
    <main>
      <h1>Product : {id}</h1>
      <ProductPreview />
    </main>
  );
};

export default connect()(ProductPage);
