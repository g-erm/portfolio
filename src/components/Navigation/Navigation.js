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
      <Link to="/projects" className="item">Projects</Link>
      <Link to="/articles" className="item">Articles</Link>
      <Link to="/about" className="item">About</Link>
    </motion.div>
  )
}
 
export default Navigation;