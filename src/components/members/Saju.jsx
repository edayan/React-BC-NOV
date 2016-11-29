import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Saju = () => (
  <Card expanded={false}>

    <CardMedia>
      <img src="img/edayan-info.jpg" />
    </CardMedia>
    <CardTitle title="Saju" subtitle="BC Support:Bangalore" />
    <CardText>
      <a href="http://edayan.info/" target="_blank">www.edayan.info</a>
    </CardText>

  </Card>
);

export default Saju;
