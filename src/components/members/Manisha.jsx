import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Manisha = () => (
  <Card expanded={false}>

    <CardMedia>
      <img src="img/manisha.jpg" />
    </CardMedia>
    <CardTitle title="Manisha" subtitle="BC Support:Bangalore" />
    <CardText>
      <a href="" target="_blank">The dancer</a>
    </CardText>

  </Card>
);

export default Manisha;
