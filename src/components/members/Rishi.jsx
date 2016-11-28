import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Rishi = () => (
  <Card expanded={false}>

    <CardMedia>
      <img src="img/edayan-info.jpg" />
    </CardMedia>
    <CardTitle title="Rishi" subtitle="BC Support:Denmark" />
    <CardText>
      born:Feb-23
      <br/>
      <a href="" target="_blank">link</a>
    </CardText>

  </Card>
);

export default Rishi;
