import React from 'react';
import CurrentUser from '../../features/CurrentUser';


function Card(props) {
    function classes() {
      const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
      const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
      return "card mb-3 " + bg + txt;
    }
  
    return (
      <div className={classes()} style={{ maxWidth: props.maxWidth || "100%" }}>
        <div className="card-header">{props.header} {!props.hideCurrentUser && <CurrentUser/>}</div>
        <div className="card-body">
          {props.title && <h5 className="card-title">{props.title}</h5>}
          {props.text && <p className="card-text">{props.text}</p>}
          {props.body || props.children}
          {props.status && <div id="createStatus">{props.status}</div>}
        </div>
      </div>
    );
  }

  export default Card;