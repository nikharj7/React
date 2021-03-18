import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import TrafficByDevice from './TrafficByDevice';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const MRR = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Customer Relation"
    >
      <Container maxWidth={false}>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <TrafficByDevice />
        </Grid>
      </Container>
    </Page>
  );
};

export default MRR;
