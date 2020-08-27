import React from 'react';

import githubs from '../assets/GitHub-Mark-120px-plus.png';
import Card from './Card';
import { Container, Row } from 'reactstrap';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
            id: 0,
            title: 'Dev Grub',
            subTitle: 'The cookbook for developers',
            imgSrc: githubs,
            link: 'https://github.com/caselva',
            selected: false
        },
        {
            id: 1,
            title: 'Carlos Selva',
            subTitle: 'YouTube channel',
            imgSrc: githubs,
            link: 'https://github.com/caselva',
            selected: false
        },
        {
            id: 2,
            title: 'Evverest',
            subTitle: 'A social network for developers',
            imgSrc: githubs,
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
      return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
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