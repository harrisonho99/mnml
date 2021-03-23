import './pagestyle/ShopPagee.css';
import HomeMenu from '../libs/utils/HomeMenu';
import Filter from '../libs/utils/Filter';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Grid, Paper, makeStyles, useMediaQuery } from '@material-ui/core';
import SimpleCart from '../libs/utils/SimpleCart';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => {
  return {
    main: {
      backgroundColor: 'white',
    },
    container: {
      position: 'relative',
      padding: theme.spacing(1),
      margin: 0,
      width: '100%',
    },

    gridCard: {
      padding: 10,
      // margin: 10,
    },
    paper: {
      background: 'white',
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
const ShopPage = ({ cardData }) => {
  const classes = useStyles();
  // const matchesMedia = useMediaQuery('(min-width:1000px)');
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:4000/api/allproducts')
      .then((response) => {
        setData(response.data.list);
        // console.log(response.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (cardData.length > 0) {
      setData(cardData);
    }
  }, [cardData]);
  return (
    <>
      <main className={classes.main}>
        <HomeMenu />
        <Grid container className={classes.gridRoot}>
          <Grid item sm={12} md={4} lg={3} className={classes.filterGrid}>
            <Filter />
          </Grid>
          <Grid item sm={12} md={8} lg={9}>
            <Paper elevation={0} className={classes.paper}>
              <Grid container>
                {data.map((product) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      className={classes.gridCard}
                      key={product._id}
                    >
                      <SimpleCart
                        color={product.mainColor}
                        imgURL={product.imageURL}
                        price={product.price}
                        name={product.name}
                        prodURL={product._id}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </main>
    </>
  );
};
const mapStateToProps = ({ cardDataReducer }) => ({
  cardData: cardDataReducer,
});

export default connect(mapStateToProps)(ShopPage);
