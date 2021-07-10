import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../constants/colors';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    paddingTop: theme.spacing(25),
    paddingBottom: '10px',
    marginLeft: theme.spacing(8),
    '& > * + *': {
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(8),
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      marginLeft: theme.spacing(2),
    },
  },
  colorLine: {
    background: colors.sixth,
    color: colors.sixth,
  },
}));

export default function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <center>
        <LinearProgress className={classes.colorLine} />
      </center>
      <center>
        <Typography variant="h4">Loading ....</Typography>
      </center>

    </div>
  );
}