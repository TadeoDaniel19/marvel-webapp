import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  accordion: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&::not(:last-child)': {
      borderBottom: 0,
    },
    '&::before': {
      display: 'none',
    },
    '&::expanded': {
      margin: 'auto',
    },
  },
  summary: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&::expanded': {
      minHeight: 56,
    },
  },
  avatarLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  },
  title: {
    fontWeight: 'bold',
    paddingLeft: '25px',
    paddingTop: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
  },
  overview: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  releaseDate: {
    fontWeight: 'bold',
  }
}));

export default useStyles;