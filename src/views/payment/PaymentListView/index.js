import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import LatestOrders from './LatestOrders';

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
      title="Payments"
    >
      <Container maxWidth={false}>
        <Grid
          item
          lg={12}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestOrders />
        </Grid>
      </Container>
    </Page>
  );
};

export default MRR;
