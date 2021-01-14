import React from "react";
import './Navigation.css';
import { motion } from 'framer-motion';
import Button from './Button/Button';
 
function Navigation(props) {
  return (
    <motion.div 
      className="navigation-sub"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3, duration: 1.0 }}>
      
      <Button link="#about" desc="ABOUT"/>
      <Button link="#java" desc="JAVA"/>
      <Button link="#webdev" desc="WEBDEV"/>
      <Button link="#appdev" desc="APPDEV"/>
      <Button link="#contact" desc="CONTACT"/>

    </motion.div>
  )
}
 
export default Navigation;