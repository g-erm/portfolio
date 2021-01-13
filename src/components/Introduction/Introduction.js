import React from "react";
import profile from '../../assets/squarepic.jpg';
import './Introduction.css';
import { motion } from 'framer-motion';
 
function Introduction(props) {
  return (
    <div>

      <motion.h1
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.75 }}>

      <h1 className="page-title">g-erm</h1>
      
      <table className="introcontainer">
        <tr>
          <th style={{width: '30%'}}><img className="profile" src={profile} alt="Profile Picture"/></th>
          <th style={{width: '70%'}}>
            <h3>Hello there! I am Germaine Tan.</h3>
            <text className="intropara">I am currently in my second year of pursuing a Bachelor's Degree in Computer Science at National University of Singapore.</text>
          </th>
        </tr>
      </table>

      </motion.h1>
    </div>
  )
}
 
export default Introduction;