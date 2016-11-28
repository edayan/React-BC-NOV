import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

const appBarStyle = {
  marginLeft:90,
  width: 1130,
};

const appBarTitleStyle = {
  marginLeft:250,
};

class AppBarLayout extends React.Component {

  render () {
    return (
      <AppBar
        style={appBarStyle}
        title={<span>Release November-2016</span>}
        titleStyle={appBarTitleStyle}
      />
    );
  }
}

export default AppBarLayout;
