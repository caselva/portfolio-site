import React from 'react';
import CardInfo from './CardInfo';

function Card(props) {

  return (
    <faux className="d-inline-block c-card" onMouseEnter={(e) => props.click(props.item)} onClick={(e) => window.open(props.item.link)}>
      <img className="c-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
      { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} />}
    </faux>
  );
  
}

export default Card;