import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Sales from './Sales';
import Sales1 from './Sales1';
import Sales2 from './Sales2';
import Sales3 from './Sales3';
import Sales4 from './Sales4';
import Sales5 from './Sales5';
import Sales6 from './Sales6';
import Sales7 from './Sales7';
import Sales8 from './Sales8';

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
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={6}
            sm={6}
            xl={3}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={3}
            xs={12}
          >
            <Sales1 />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={3}
            xs={12}
          >
            <Sales2 />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={3}
            xs={12}
          >
            <Sales3 />
          </Grid>
          <Grid
            item
            lg={6}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales4 />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            xl={3}
            xs={12}
          >
            <Sales5 />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            xl={3}
            xs={12}
          >
            <Sales6 />
          </Grid>
          <Grid
            item
            lg={6}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales7 />
          </Grid>
          <Grid
            item
            lg={6}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales8 />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default MRR;
