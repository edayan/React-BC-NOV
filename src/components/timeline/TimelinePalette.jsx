import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper';

import ReleaseTimeLine from './ReleaseTimeLine';

const divStyle = {
    marginLeft: 90,
    marginTop:30,
    width: 1130,
    height: 1100,
    paddingTop:15
};

class TimelinePalette extends React.Component {
  render () {
    return (
      <Paper style={divStyle} zDepth={5} >
          <ReleaseTimeLine />
        </Paper>
    );

  }
}

export default TimelinePalette;
