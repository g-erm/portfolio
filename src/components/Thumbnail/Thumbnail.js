import React from 'react';
import {Link} from 'react-router-dom';
import './Thumbnail.css';
import { motion } from 'framer-motion';
 
function Thumbnail(props) {
  return (
    <motion.button 
      className="project"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image} alt="Project Image"/>
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
      </Link>
    </motion.button>
  );
}
 
export default Thumbnail;