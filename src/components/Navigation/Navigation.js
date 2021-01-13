import React from "react";
import { Link } from 'react-router-dom';
import './Navigation.css';
import { motion } from 'framer-motion';
 
function Navigation(props) {
  return (
    <motion.div 
      className="navigation-sub"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.0 }}>

      <a href="#java" className="item">Java</a>
      <a href="#articles" className="item">Articles</a>
      <a href="#projects" className="item">Projects</a>

    </motion.div>
  )
}
 
export default Navigation;