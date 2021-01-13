import React from "react";
import { motion } from 'framer-motion';
import './Button.css';
 
function Button(props) {
  return (
    <div>
      <motion.a 
        whileHover={{boxShadow: "0 0 5px #E6AF2E", 
          borderWidth: "2px",
          fontWeight: 'bold'}}
        href={props.link} 
        className="item">
        {props.desc}
      </motion.a>
    </div>
  )
}
 
export default Button;