import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {
        title: 'Welcome to my Page!',
        subTitle: 'Thanks for stoping by to check out what I am all about.',
        text: 'Below you can find some of the work I have done'
      }
    }
  }
}

export default Home;