import React from 'react';
import './Thumbnail.css';
import { motion } from 'framer-motion';
import githublogo from '../../assets/github.png'
 
function Thumbnail(props) {
  return (
    <button className="project">

      <a href={props.link}>
        <motion.button 
          className="repo-link" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>

          <img className="github-logo" src={githublogo}/>
          <text className="view-repo">View Repository</text>

        </motion.button>
      </a>

      <table>
        <tr style={{height: '10%'}}>
          <th rowspan="2" style={{width: '15%'}}><img className="project-image" src={props.image} alt="Project Image"/></th>
          <th style={{width: '70%'}}>
            <h1 className="project-title">{props.title}</h1>
          </th>
        </tr>
        <tr>
          <div className="project-description">{props.description}</div>
        </tr>
      </table>

    </button>
  );
}
 
export default Thumbnail;