import './pagestyle/ShopPagee.css';
import HomeMenu from '../libs/utils/HomeMenu';
import Filter from '../libs/utils/Filter';
import {
  Container,
  Grid,
  Paper,
  makeStyles,
  useMediaQuery,
} from '@material-ui/core';
import SimpleCart from '../libs/utils/SimpleCart';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      position: 'relative',
      padding: theme.spacing(1),
      margin: 0,
    },
    gridRoot: {},
    paper: {
      // margin: '10px 0',
      background: 'white',
      // backgroundColor: 'grey',
      minHeight: '50vh',
    },
    filterContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
    },
  };
});
const ShopPage = () => {
  const classes = useStyles();
  const matchesMedia = useMediaQuery('(min-width:1000px)');
  return (
    <>
      <main>
        <Container className={classes.container}>
          <HomeMenu />
          <Grid container className={classes.gridRoot}>
            <Grid item xs={12} md={3}>
              <Filter />
            </Grid>
            <Grid item xs={12} md={9}>
              <Paper elevation={0} className={classes.paper}>
                <SimpleCart
                  color='white'
                  imgURL='https://cdn.shopify.com/s/files/1/1300/6871/products/vintage-cargo-pants-black-2_160x.jpg?v=1564305047%20160w,%20//cdn.shopify.com/s/files/1/1300/6871/products/vintage-cargo-pants-black-2_320x.jpg?v=1564305047%20320w,%20//cdn.shopify.com/s/files/1/1300/6871/products/vintage-cargo-pants-black-2_650x.jpg?v=1564305047%20650w,%20//cdn.shopify.com/s/files/1/1300/6871/products/vintage-cargo-pants-black-2_1300x.jpg?v=1564305047%201300w'
                  price={50}
                  name='SIMPLE DENIM'
                  prodURL='1003131'
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};
export default ShopPage;
