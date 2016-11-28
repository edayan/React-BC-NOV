import React, { PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepPurple500, indigo500, indigo700, redA200} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBarLayout from './appbar/AppBarLayout';
import Members from './members/Members';
import TimelinePalette from './timeline/TimelinePalette';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: deepPurple500,
        primary2Color: indigo700,
        accent1Color: redA200,
        pickerHeaderColor: indigo500,
    }
});

class app extends React.Component {

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBarLayout />
          <Members />
          <TimelinePalette />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default app;
