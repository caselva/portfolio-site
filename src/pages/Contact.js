import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Let\'s Talk'
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

export default Contact;