import React from 'react';
import {
  Typography,
  makeStyles,
  Container,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Grid,
  Paper,
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import UpdateIcon from '@material-ui/icons/Update';
import BeenhereIcon from '@material-ui/icons/Beenhere';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: 'whitesmoke',
  },
  paper: {
    margin: '10px 0',
    background: 'white',
  },
  accordionTitleWrapper: {
    display: 'flex',
    width: '100%',
  },
  accordionSumary: {
    display: 'flex',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 300,
    color: 'black',
    textAlign: 'center',
  },
  accordion: {
    backgroundColor: 'white',
  },
  gridItams: {
    backgroundColor: 'whitesmoke',
  },
  iconWrapper: {
    width: 60,
    textAlign: 'center',
  },
  textWrapper: {
    textAlign: 'center',
    flexGrow: 1,
  },
  accordionDetail: {
    textAlign: 'center',
    display: 'block',
  },
}));

export default function DetailsAccordionSection() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container>
        <Paper elevation={0} className={classes.paper}>
          <Grid container className={classes.gridRoot}>
            <Grid item xs={12} className={classes.gridItams}>
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                  className={classes.accordionSumary}
                >
                  <div className={classes.accordionTitleWrapper}>
                    <div className={classes.iconWrapper}>
                      <FlightTakeoffIcon />
                    </div>
                    <div className={classes.textWrapper}>
                      <Typography className={classes.heading}>
                        Free Shipping on All Orders
                      </Typography>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetail}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                  className={classes.accordionSumary}
                >
                  <div className={classes.accordionTitleWrapper}>
                    <div className={classes.iconWrapper}>
                      <UpdateIcon />
                    </div>
                    <div className={classes.textWrapper}>
                      <Typography className={classes.heading}>
                        Hassle-Free Returns
                      </Typography>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetail}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                  className={classes.accordionSumary}
                >
                  <div className={classes.accordionTitleWrapper}>
                    <div className={classes.iconWrapper}>
                      <BeenhereIcon />
                    </div>
                    <div className={classes.textWrapper}>
                      <Typography className={classes.heading}>
                        100% Secure Checkout
                      </Typography>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetail}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </section>
  );
}
