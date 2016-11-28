import React, { PropTypes } from 'react'
import HorizontalTimelineContent from './HorizontalTimelineContent';

import GameInfo from './content/content';


class ReleaseTimeLine extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 0, previous: 0 };
  }

  componentWillMount() {
      this.data = GameInfo.map((game, index) => {
        return ({
          date: game.date,
          component: (
            <div className='container' key={index}>
              <h2>{ game.title }</h2>
              <h2>{ game.subtitle }</h2>

              <img src={game.avatarURL}></img>
            </div>
          )
        });
      });
  }

  render () {
    return (

        <HorizontalTimelineContent
          content={this.data} />

    );
  }
}

export default ReleaseTimeLine;
