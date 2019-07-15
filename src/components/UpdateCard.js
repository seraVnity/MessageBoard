import React from "react";
import { update } from "../util/storage";
import CreateCard from './CreateCard';
import CardDetails from './CardDetails';


class UpdateCard extends React.Component {

  callBackFromCardDetails = (cardToUpdate) => {
    return cardToUpdate;
  }

  render(props) {
    
    // const { title, text, phone, id, photo } = this.props.card;
    return (
      <div className="ui modal">
        <CardDetails card={this.callBackFromCardDetails} />
      </div>
      
    );
  }
}

export default UpdateCard;