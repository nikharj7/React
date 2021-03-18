import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  Table,
  TableBody
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Sales = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="Tickets Open"
      />
      <Divider />
      <CardContent>
        <Box
          height={400}
          position="relative"
        >
          <Table>
            <TableBody>
              Hello
            </TableBody>
          </Table>
        </Box>
      </CardContent>
    </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string
};

export default Sales;
