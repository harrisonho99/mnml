import { Typography } from 'antd';
import './HomeSectionStyle/Features.css';
import { Container, Paper, makeStyles } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
const { Paragraph, Title } = Typography;
const useStyles = makeStyles((theme) => {
  return {
    paper: {
      minHeight: 250,
      margin: '10px 0',
      border: 'none',
      //   borderRadius: '0',
      backgroundColor: '#f6f6f6',
    },
    featuresWrapper: {
      textAlign: 'center',
      height: 100,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  };
});
const Features = () => {
  const classes = useStyles();
  return (
    <Container>
      <Paper className={classes.paper}>
        <section className='botom-section'>
          <div className='draggable-add'>
            <div className='author-feedback-wrapper'>
              <span>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </span>
            </div>
            <div className='author-quotes-wrapper'>
              <Title level={4}>
                “The premiere destination of high quality, yet affordable
                streetwear.”
              </Title>
            </div>
          </div>
          <div className='feature-collab'>
            <div className={classes.featuresWrapper}>
              <Paragraph>FEATURED IN</Paragraph>
            </div>
            <div id='logo-wrapper'>
              <div className='image-item-wrapper'>
                <img
                  src='https://cdn.shopify.com/s/files/1/1300/6871/files/hypebeast_3x_08d58b6b-762a-4401-82f0-7b919e6c760d_160x22.png?v=1525997149'
                  alt='logo'
                />
              </div>
              <div className='image-item-wrapper'>
                <img
                  src='https://cdn.shopify.com/s/files/1/1300/6871/files/gq_3x_fe584c2b-7c06-4ffd-9427-32b6847d4840_138x72.png?v=1525997162'
                  alt='logo'
                />
              </div>
              <div className='image-item-wrapper'>
                <img
                  src='https://cdn.shopify.com/s/files/1/1300/6871/files/slamv3_160x160.png?v=1590171413'
                  alt='logo'
                />
              </div>
            </div>
          </div>
        </section>
      </Paper>
    </Container>
  );
};
export default Features;
