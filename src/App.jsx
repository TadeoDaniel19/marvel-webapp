import { Fragment, useState } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import colors from '../src/constants/colors';

// Material UI dependencies
import CssBaseline from '@material-ui/core/CssBaseline';
import MoviesContainer from './containers/movieContainer';
import AppBarCuston from './components/appBar';

// Set Multi Font in the Project
const theme = createTheme({
  palette: {
    text: {
      primary: colors.secondary,
      secondary: colors.third,
      third: colors.fourth,
      fourth: colors.fifth,
      fifth: colors.primary,
    },
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  typography: {
    fontFamily: [
      '"Muli"',
      'Roboto',
    ].join(','),
  },
});


const App = () => {
  const [showApp, setShowApp] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Fragment key="app">
        <CssBaseline />
        <AppBarCuston showApp={() => setShowApp(!showApp)} />
        {
          showApp && (
            <MoviesContainer />
          )
        }
      </Fragment>
    </ThemeProvider>
  );
};

export default App;