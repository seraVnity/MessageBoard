import "./CardValidation.css";
import React from 'react';



class CardValidation extends React.Component {

  render(props) {
    let iconClassName;
    if (this.props.isValid === undefined) {
      iconClassName = "question circle outline icon";
    } 
    else if (this.props.isValid === false) {
      iconClassName = "exclamation circle icon"

    } else {
      iconClassName = "check circle icon";
    }

    return (
      <div className="field six column right-text">
        <i className={iconClassName}></i>
        {this.props.text}
      </div>
      

    );
  }
}

export default CardValidation;