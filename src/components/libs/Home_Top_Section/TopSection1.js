import Carousel from '../utils/Carousel';
import { Paper, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from 'antd';
import './HomeSectionStyle/NewArrivalSection.css';
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    background: 'white',
  },
  gridRoot: {
    padding: theme.spacing(1),
  },
}));
const TopSection1 = () => {
  const classes = useStyles();

  return (
    <section className='section-container'>
      <Container>
        <Paper elevation={0} className={classes.paper}>
          <Grid container className={classes.gridRoot}>
            <Grid item xs={12} sm={8} lg={8}>
              <Paper className={classes.paper}>
                <Carousel auto={true} speed={2000} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4} lg={4}>
              <Paper className={classes.paper}>
                <Card
                  title='Default card'
                  style={{ width: 'auto', height: 200 }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
                <Card
                  title='Default card'
                  style={{ width: 'auto', height: 200 }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </section>
  );
};
export default TopSection1;
