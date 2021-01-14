import React from "react";
import { motion } from 'framer-motion';
import githublogo from '../../assets/github-white.jpg';
import linkedinlogo from '../../assets/linkedinlogo.png';
import profile from '../../assets/squarepic.jpg';
import './Introduction.css';
 
function Introduction(props) {
  return (
    <div>

      <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.75 }}>

        <div>
          <a href="https://github.com/g-erm/">
            <img className="logo" src={githublogo}/>
          </a>

          <a href="https://www.linkedin.com/in/g-erm/">
            <img className="logo" src={linkedinlogo}/>
          </a>
        </div>
        
        <table className="introcontainer">
          <tr>
            <th style={{width: '30%'}}><img className="profile" src={profile} alt="Profile Picture"/></th>
            <th style={{width: '70%'}}>

              <h3 style={{fontWeight:'400', color:'#7CB88C'}}>
                Hello there! I am
                <text style={{fontWeight:'500', color:'white'}}> Germaine Tan</text>
                .
              </h3>

              <text className="intropara">
                Click the icons above to check out my Github and Linkedin profiles, 
                or stay around and learn more about me by clicking on any of the tabs below!
              </text>

            </th>
          </tr>
        </table>
        <text className="dimension">(This page is best viewed on a full-screen browser window. Developed on 1519px x 754px window.)</text>
      </motion.h1>
    </div>
  )
}
 
export default Introduction;