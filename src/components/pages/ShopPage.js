import './pagestyle/ShopPagee.css';
import HomeMenu from '../libs/utils/HomeMenu';
import Filter from '../libs/utils/Filter';
import axios from 'axios';
import { useState, useEffect } from 'react';
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
      display: 'flex',
      flexWrap: 'wrap',
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
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://192.168.2.2:4000/api/allproducts')
      .then((response) => {
        setData(response.data.list);
        // console.log(response.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
                {data.map((product) => {
                  return (
                    <SimpleCart
                      color={product.mainColor}
                      imgURL={product.imageURL}
                      price={product.price}
                      name={product.name}
                      prodURL={product._id}
                    />
                  );
                })}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};
export default ShopPage;
