import React, { PropTypes } from 'react'
import HorizontalTimelineContent from './HorizontalTimelineContent';

import ReleaseInfo from './content/content';


const releaseInfoStyle = {
  color: '#673AB7',
};

class ReleaseTimeLine extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 0, previous: 0 };
  }

  componentWillMount() {
      this.data = ReleaseInfo.map((game, index) => {
        return ({
          date: game.date,
          component: (
            <div className='container' key={index}>
              <div style ={releaseInfoStyle}>
                <h2>{ game.title }</h2>
                <h2>{ game.subtitle }</h2>
              </div>


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
