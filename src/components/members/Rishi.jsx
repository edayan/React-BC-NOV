import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Rishi = () => (
  <Card expanded={false}>

    <CardMedia>
      <img src="img/rishi.jpg" />
    </CardMedia>
    <CardTitle title="Rishi" subtitle="BC Support:Denmark" />
    <CardText>
      <a href="" target="_blank">The all-rounder</a>
    </CardText>

  </Card>
);

export default Rishi;
