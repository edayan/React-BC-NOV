import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Pallavi = () => (
  <Card expanded={false}>

    <CardMedia>
      <img src="img/edayan-info.jpg" />
    </CardMedia>
    <CardTitle title="Pallavi" subtitle="BC Support:Bangalore" />
    <CardText>
      born:Feb-23
      <br/>
      <a href="" target="_blank">link</a>
    </CardText>

  </Card>
);

export default Pallavi;
