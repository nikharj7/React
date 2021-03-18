import React, { useState } from 'react';
import clsx from 'clsx';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
  {
    id: uuid(),
    ref: '1',
    ind: '15-feb-2020',
    cid: 'saurabh111',
    ser: 'all',
    charge: 'null',
    csc: 'null',
    ct: 'VISA',
    pt: 'Pending',
    customer: {
      name: 'Saurabh Rai'
    },
    status: 'Refund'
  },
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Payments" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Invoice no
                </TableCell>
                <TableCell>
                  Invoice Date
                </TableCell>
                <TableCell>
                  CareTaker Name
                </TableCell>
                <TableCell>
                  User Id
                </TableCell>
                <TableCell>
                  Service
                </TableCell>
                <TableCell>
                  Charge
                </TableCell>
                <TableCell>
                  Card service charges
                </TableCell>
                <TableCell>
                  Card Type
                </TableCell>
                <TableCell>
                  Payment Type
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>
                    {order.ref}
                  </TableCell>
                  <TableCell>
                    {order.ind}
                  </TableCell>
                  <TableCell>
                    {order.customer.name}
                  </TableCell>
                  <TableCell>
                    {order.cid}
                  </TableCell>
                  <TableCell>
                    {order.ser}
                  </TableCell>
                  <TableCell>
                    {order.charge}
                  </TableCell>
                  <TableCell>
                    {order.csc}
                  </TableCell>
                  <TableCell>
                    {order.ct}
                  </TableCell>
                  <TableCell>
                    {order.pt}
                  </TableCell>
                  <TableCell>
                    <Chip
                      color="primary"
                      label={order.status}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
