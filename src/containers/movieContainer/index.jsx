import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, resetMovies } from '../../services/actions/movies';
import AccordionMovie from '../../components/AccordionMovie';
import { selectorMovies } from '../../services/selectors/movies';
import Loading from '../../components/loading';
import Error from '../../components/error';

const MoviesContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const searchProjects = () => {
      dispatch(resetMovies());
      dispatch(getMovies());
    };
    searchProjects();
  }, [dispatch]);

  useEffect(() => () => {
    dispatch(resetMovies());
  }, [dispatch]);
  const {
    isLoading,
    data,
    error,
  } = useSelector(selectorMovies);

  const [expanded, setExpanded] = useState('panel_0');

  if (isLoading) {
    return (
      <Loading />
    )
  }

  if (error) {
    console.log('que hay aqui --->', error)
    return (
      <Error message="Oops!, something went wrong."/>
    )
  }
  return (
    <div>
      {
        data
        && data.map((movie) => <AccordionMovie key={`movie-detail${movie.title}`} movie={movie} id={movie._id} expanded={expanded} setExpanded={setExpanded} />)
      }
    </div>
  )
}

export default MoviesContainer;