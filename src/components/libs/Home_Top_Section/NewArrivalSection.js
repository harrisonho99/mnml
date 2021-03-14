import { Paper, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import { WHAT_NEW_LIST } from '../../../helper/_listNavURL';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { useRef, useEffect } from 'react';
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    background: 'white',
  },
  gridRoot: {
    padding: theme.spacing(1),
  },
  textSpacing: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  link: {
    textDecoration: 'underline',
  },
  sectionXFLow: {
    display: 'flex',
    overflowX: 'hidden',
    height: 'fit-content',
    overflowY: 'hidden',
  },
  cardImageWrapper: {
    width: 'fit-content',
  },
  imageScrollContainer: {
    position: 'relative',
    height: 400,
    width: 300,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: '100%',
  },
  topImageText: {
    width: 'fit-content',
    padding: theme.spacing(0.4),
    position: 'absolute',
    top: 0,
    left: 0,
  },
  moveBtnWrapper: {
    width: 100,
    display: 'flex',
    justifyContent: 'space-around',
  },
}));
const { Title, Paragraph } = Typography;
const NewArrivalSection = () => {
  const classes = useStyles();
  const cardContainerRef = useRef(null);
  const moveRightButtonRef = useRef(null);
  const moveLeftButtonRef = useRef(null);

  useEffect(() => {
    if (
      cardContainerRef.current &&
      moveLeftButtonRef.current &&
      moveRightButtonRef.current
    ) {
      NodeList.prototype.forEach = Array.prototype.forEach;
      const cartItemsList = cardContainerRef.current;
      let currentScrollPosition = 0;
      const maxWidth = cartItemsList.scrollWidth;
      const scrolledSize = cartItemsList.childNodes[0].clientWidth;
      const handleMove = (_, command) => {
        if (command === 'left') {
          cartItemsList.scroll({
            behavior: 'smooth',
            left:
              currentScrollPosition === 0
                ? currentScrollPosition
                : (currentScrollPosition -= scrolledSize),
          });
        } else {
          cartItemsList.scroll({
            behavior: 'smooth',
            left:
              currentScrollPosition >= maxWidth - cartItemsList.clientWidth
                ? maxWidth
                : (currentScrollPosition += scrolledSize),
          });
        }
        console.log(currentScrollPosition);
      };
      const leftButton = moveLeftButtonRef.current;
      const rightButton = moveRightButtonRef.current;
      leftButton.addEventListener(
        'click',
        handleMove.bind(this, undefined, 'left')
      );
      rightButton.addEventListener(
        'click',
        handleMove.bind(this, undefined, 'right')
      );
    }
  }, []);

  return (
    <section className='section-container'>
      <Container>
        <Paper elevation={0} className={classes.paper}>
          <Grid container className={classes.gridRoot}>
            <Grid item xs={12} className={classes.textSpacing}>
              <Title level={4}>WHAT'S NEW</Title>
              <div className={classes.moveBtnWrapper}>
                <Button shape='circle' ref={moveLeftButtonRef}>
                  <LeftOutlined />
                </Button>
                <Button shape='circle' ref={moveRightButtonRef}>
                  <RightOutlined />
                </Button>
              </div>
              <Link to='/new-arrival' className={classes.link}>
                View all
              </Link>
            </Grid>
            <Grid item xs={12}>
              <div
                className={`${classes.sectionXFLow} section-flow`}
                ref={cardContainerRef}
              >
                {WHAT_NEW_LIST.map((item) => {
                  return (
                    <Card
                      key={item.imageURL}
                      className={classes.cardImageWrapper}
                    >
                      <Link to={item.url}>
                        <div className={classes.imageScrollContainer}>
                          <img
                            src={item.imageURL}
                            alt={item.title}
                            className={classes.image}
                          />
                        </div>
                      </Link>

                      <div className={classes.cardInfoWrapper}>
                        <Paragraph>{item.desc}</Paragraph>
                        <Title level={5}>{item.title}</Title>
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
export default NewArrivalSection;
