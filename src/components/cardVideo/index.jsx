import { Card, CardActionArea} from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './styles';

const CardVideo = (props) => {
  const { trailer, title } = props;
  const classes = useStyles();
  const misteryUrl = 'https://img2.freepng.es/20180404/bqw/kisspng-computer-icons-error-download-clip-art-x-mark-5ac54ca17a5a95.5409712615228796495012.jpg';
  return (
    <Card className={classes.card} raised={true}>
      <CardActionArea>
        <img
          className={classes.media}
          src={trailer ? trailer : misteryUrl}
          alt={title}
        />
      </CardActionArea>
    </Card>
  )
}

CardVideo.propTypes = {
  trailer: PropTypes.string,
  title: PropTypes.string,
};

CardVideo.defaultProps = {
  title: '',
  trailer: '',
};
export default CardVideo;