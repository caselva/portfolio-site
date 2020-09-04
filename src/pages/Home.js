import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: 'Hi, Im Carlos!',
        subTitle: 'Thanks for stoping by to check out what I am all about.',
        text: 'Below you can find some of the work I have done',
        // show: true
    }
  }

  render() {
    return (
      <div>
        <Hero title={this.state.title} subTitle={this.state.subTitle} text={this.state.text} />
        <div className="third">
        <Carousel/>
        </div>
      </div>
    );
  }
}

export default Home;