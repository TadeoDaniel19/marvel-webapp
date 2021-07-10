import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  media: {
    width: '340px',
    height: '320px',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '100px',
    },
  },
  avatarLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  title: {
    fontWeight: 'bold',
    paddingLeft: '25px',
    paddingTop: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
  }
}));

export default useStyles;