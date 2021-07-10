import { IconButton, Toolbar, Typography, AppBar } from "@material-ui/core"
import PropTypes from 'prop-types';
import { Menu } from '@material-ui/icons';

const AppBarCuston = (props) => {
const { showApp } =  props;
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start"color="inherit" aria-label="menu" onClick={showApp}>
          <Menu />
        </IconButton>
        <Typography variant="h6">
          Marvel Movies
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

AppBarCuston.propTypes = {
  showApp: PropTypes.func.isRequired,
};

export default AppBarCuston;