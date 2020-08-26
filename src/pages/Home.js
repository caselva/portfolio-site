import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Hero from '../components/Hero';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: 'Welcome to my Page!',
        subTitle: 'Thanks for stoping by to check out what I am all about.',
        text: 'Below you can find some of the work I have done'
    }
  }

  render() {
    return (
      <Hero title={this.state.title} subTitle={this.state.subTitle} text={this.state.text} />
    );
  }
}

export default Home;