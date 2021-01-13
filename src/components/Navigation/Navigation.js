import React from "react";
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
      <a href="#webdev" className="item">Webdev</a>
      <a href="#articles" className="item">Articles</a>

    </motion.div>
  )
}
 
export default Navigation;