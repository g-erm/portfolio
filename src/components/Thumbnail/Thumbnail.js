import React from 'react';
import {Link} from 'react-router-dom';
import './Thumbnail.css';
 
function Thumbnail(props) {
  return (
    <button className="project">
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image} alt="Project Image"/>
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
      </Link>
    </button>
  );
}
 
export default Thumbnail;