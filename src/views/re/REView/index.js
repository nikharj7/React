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
      title="Revenue & Expense"
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
        </Grid>
      </Container>
    </Page>
  );
};

export default MRR;
