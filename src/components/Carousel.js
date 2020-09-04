import React from 'react';

import githubs from '../assets/GitHub-Mark-120px-plus.png';
import winston from '../assets/Winston.jpg';
import office from '../assets/The-Boys.jpg';
import Card from './Card';
import { Container, Row } from 'reactstrap';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
            id: 0,
            title: 'Winston',
            subTitle: 'My cats Instagram account',
            imgSrc: winston,
            link: 'https://www.instagram.com/winston.and.abel/',
            selected: false
        },
        {
            id: 1,
            title: 'Carlos Selva',
            subTitle: 'My GitHub account',
            imgSrc: githubs,
            link: 'https://github.com/caselva',
            selected: false
        },
        {
            id: 2,
            title: 'GitHub',
            subTitle: 'Also my github',
            imgSrc: office,
            link: 'https://github.com/caselva',
            selected: false
        },
      ]
    }
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items]

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if(item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    })
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }

  render() {
    return (
       <Container>
         <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
         </Row>
       </Container>
    );
  }
}

export default Carousel;