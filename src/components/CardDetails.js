import React from 'react';
import { remove } from "../util/storage";
import "./CardDetails.css";


class CardDetails extends React.Component {
  render(props) {
    const {title, text, phone, photo, id} = this.props.card;
  
  return (
    <div className='row' style={{margin:"1em 0"}}>
      <div className="field ten wide column">
        <div>{title}</div>
        <div className="card subheader">{text}</div>
        {/* <div className='field'>
        <img alt={title} value={photo} />
      </div> */}
      </div>
      {/* <div className="six wide column"> */}
      <div className='field six wide column'>
          <p><i className="phone icon"></i>{phone}</p> 
        
        {/* <div className='field'> */}
          <input className='ui blue basic button' type='submit' value='Редактировать'/>
        {/* </div> */}
        {/* <div className='field'> */}
          <input className='ui red basic button' type='submit' value='Удалить' onClick={(e) => remove(id)} />
        {/* </div> */}
      {/* </div> */}
      </div>
    </div>
  );
  }
}


export default CardDetails;