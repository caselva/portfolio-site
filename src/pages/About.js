import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'About Me'
    }
  }

  render() {
    return (
      <div>
        {this.state.title}
      </div>
    );
  }
}

export default About;