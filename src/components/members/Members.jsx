import React, { PropTypes } from 'react'

import Paper from 'material-ui/Paper';
import Saju from './Saju';
import Rishi from './Rishi';
import Pallavi from './Pallavi';
import Manisha from './Manisha';


const style = {
  height: 200,
  width: 200,
  margin: 40,
  textAlign: 'center',
  display: 'inline-block',
};

const divStyle = {
    marginLeft: 90,
    marginTop:20,
    width: 1130,
    height: 440,
};

class Members extends React.Component {
  render () {
    return (
      <Paper style={divStyle} zDepth={5} >
          <Paper style={style} zDepth={5} ><Saju /></Paper>
          <Paper style={style} zDepth={5} ><Rishi /></Paper>
          <Paper style={style} zDepth={5} ><Pallavi /></Paper>
          <Paper style={style} zDepth={5} ><Manisha /></Paper>
        </Paper>
    );
  }
}

export default Members;
