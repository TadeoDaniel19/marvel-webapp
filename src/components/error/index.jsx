import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import colors from '../../constants/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(25),
    paddingBottom: '10px',
    '& > * + *': {
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  colorLine: {
    background: colors.sixth,
    color: colors.sixth,
  },
}));

const Error = (props) => {
  const { message } = props;
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <center>
        <ErrorOutlineIcon color="secondary" style={{ fontSize: 60 }} />
      </center>
      <center>
      <Typography variant="h5">
        {message}
      </Typography>
      </center>

    </Grid>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;