import { Paper, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './HomeSectionStyle/BestSeller.css';
import { Card, Typography } from 'antd';
import { BEST_SELLERS_LIST } from '../../../helper/_listNavURL';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
const { Title, Paragraph } = Typography;
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: '10px 0',
    background: 'white',
  },
  textSpacing: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  sectionXFLow: {
    display: 'flex',
    overflowX: 'scroll',
    overflowY: 'hidden',
    height: 'fit-content',
    cursor: 'grab',
  },
  cardImageWrapper: {
    width: 'fit-content',
    border: 'none',
  },
  imageScrollContainer: {
    position: 'relative',
    height: 300,
    width: 200,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: '100%',
  },
  color: {
    fontSize: '0.7rem',
    color: 'gray',
  },
  itemPrice: {
    // textAlign: 'center',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#0d47a1',
  },
}));
const BestSeller = () => {
  const classes = useStyles();
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      let pos = { top: 0, left: 0, x: 0, y: 0 };
      const scrollContainer = scrollRef.current;
      const images = scrollContainer.querySelectorAll('a');
      const preventAnchorClick = (e) => {
        e.preventDefault();
      };
      const mouseDownHandler = function (e) {
        scrollContainer.style.cursor = 'grabbing';
        scrollContainer.style.userSelect = 'none';

        pos = {
          left: scrollContainer.scrollLeft,
          top: scrollContainer.scrollTop,
          x: e.clientX,
          y: e.clientY,
        };
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
      };
      const mouseMoveHandler = function (e) {
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        scrollContainer.scrollTop = pos.top - dy;
        scrollContainer.scrollLeft = pos.left - dx;
        images.forEach((anchor) => {
          anchor.style.cursor = 'grabbing';
          anchor.addEventListener('mousedown', preventAnchorClick);
        });
      };

      const mouseUpHandler = function () {
        scrollContainer.style.cursor = 'grab';
        scrollContainer.style.removeProperty('user-select');
        images.forEach((anchor) => {
          anchor.style.cursor = 'grab';
        });

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
        images.forEach((anchor) => {
          anchor.removeEventListener('mousedown', preventAnchorClick);
        });
      };

      scrollContainer.addEventListener('mousedown', mouseDownHandler);
      return () => {
        scrollContainer.removeEventListener('mousedown', mouseDownHandler);
      };
    }
  }, []);
  return (
    <section className='section-container'>
      <Container>
        <Paper elevation={0} className={classes.paper}>
          <Grid container className={classes.gridRoot}>
            <Grid item xs={12} className={classes.textSpacing}>
              <Title level={4}>BEST SELLERS</Title>
              <Link to='/best-sellers' className={classes.link}>
                View all
              </Link>
            </Grid>
            <Grid item xs={12}>
              <div
                className={`${classes.sectionXFLow} section-scrollX`}
                ref={scrollRef}
              >
                {BEST_SELLERS_LIST.map((item) => {
                  return (
                    <Card className={classes.cardImageWrapper} key={item.url}>
                      <Link to={item.url}>
                        <div className={classes.imageScrollContainer}>
                          <img
                            draggable={false}
                            src={item.imageURL}
                            alt={item.title}
                            className={classes.image}
                          />
                        </div>
                      </Link>

                      <div className={classes.cardInfoWrapper}>
                        <Link to={item.url}>
                          <Title level={5}>{item.name}</Title>
                        </Link>
                        <Paragraph className={classes.color}>
                          {item.color}
                        </Paragraph>
                      </div>
                      <div className={classes.itemPrice}>
                        $ {item.price} USD
                      </div>
                    </Card>
                  );
                })}
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </section>
  );
};
export default BestSeller;
