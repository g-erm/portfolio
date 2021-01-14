import React from "react";
import { motion } from 'framer-motion';
import './About.css';
 
function About(props) {
  return (
    <motion.div 
      id="about"
      initial={{ x: '-200vw' }}
      animate={{ x: 0 }}
      transition={{ delay: 1.4, duration: 1, type: 'spring' }}>
      
      <h1 className="section-title">_AboutMe</h1>

      <div className="aboutpara">
        <p style={{color:'#7CB88C'}}>Hello :)</p>I'm Germaine Tan, an undergraduate. I am currently in my second year of pursuing a Bachelor's Degree in Computing, Computer Science in National University of Singapore (NUS). 
        My interest lies in front end development, software engineering and I like learning about UI/UX design as well! 
        <p>
          This simple portfolio page is created from scratch by myself, to allow myself to learn more about web development while working on something. 
          Even though it is not super impressive, I do hope to improve on it while I gain more experience and knowledge about web development. 
        </p>
      </div>

    </motion.div>
  )
}
 
export default About;