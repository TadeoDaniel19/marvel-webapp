import { Avatar, AccordionDetails, AccordionSummary, Accordion, Typography, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { format } from 'date-fns'
import CardVideo from '../../components/cardVideo';
import useStyles from './styles';

const AccordionMovie = (props) => {
  const { movie, id, expanded, setExpanded } = props;
  const classes = useStyles();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
  const { title, cover_url, overview, release_date, duration, chronology } = movie

  return (
    <div>
      <Accordion square expanded={Boolean(expanded === `panel_${id}`)} className={classes.accordion} onChange={handleChange(`panel_${id}`)}>
        <AccordionSummary className={classes.summary} aria-controls={`panel_${id}d-content`} id={`panel_${id}d-header`}>
          <Grid container direction="row">
            <Grid item>
              <Avatar className={classes.avatarLarge} alt={`movie-${title}`} src={cover_url} />
            </Grid>
            <Grid item>
              <Typography className={classes.title} variant="h6">{title}</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item>
              <CardVideo trailer={cover_url} title={title} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography className={classes.overview} gutterBottom variant="h6">
                  {overview !== null ? overview : 'There is no overview yet.'}
                </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                  { duration !== 0 ? `Duration: ${duration} min.` : 'No information about the duration yet.'}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                  {`Release date: ${format(new Date(release_date), 'MM/dd/yyyy')}`}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                  {`Chronology: ${chronology !== null ? chronology : 'No information about the chronology yet.'}`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

AccordionMovie.propTypes = {
  setExpanded: PropTypes.func.isRequired,
  expanded:  PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
  id: PropTypes.string.isRequired,
  movie: PropTypes.instanceOf(Object),
};

AccordionMovie.defaultProps = {
  movie: {},
};
export default AccordionMovie;