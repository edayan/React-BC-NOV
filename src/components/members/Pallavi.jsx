import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Pallavi = () => (
  <Card expanded={false}>

    <CardMedia>
      <img src="img/pallavi.jpg" />
    </CardMedia>
    <CardTitle title="Pallavi" subtitle="BC Support:Bangalore" />
    <CardText>
      <a href="" target="_blank">The painter</a>
    </CardText>

  </Card>
);

export default Pallavi;
