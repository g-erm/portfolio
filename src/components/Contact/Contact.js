import React from "react";
import { motion } from 'framer-motion';
import githublogo from '../../assets/github-white.jpg';
import linkedinlogo from '../../assets/linkedinlogo.png';
import maillogo from '../../assets/email.png';
import './Contact.css';
 
function Contact(props) {
  return (
    <motion.div 
      id="contact"
      initial={{ x: '-200vw' }}
      animate={{ x: 0 }}
      transition={{  delay: 1.4, duration: 1.4, type: 'spring' }}>

      <h1 className="section-title">_ContactMe</h1>
      <div className="contact-para">
        I would love to add on to this website with more experiences and upgrade it in the future!
        If you would like to find me, I am available on the following platforms:
      </div>

      <div className="contact-div">

        <motion.a 
          whileHover={{color: "white"}}
          className="contact-info" 
          href="https://github.com/g-erm/">

          <img className="contact-logo" src={githublogo}/>
          GITHUB: github.com/g-erm

        </motion.a>

        <motion.a 
          whileHover={{color: "white"}} 
          className="contact-info" 
          href="https://www.linkedin.com/in/g-erm/">
          
          <img className="contact-logo" src={linkedinlogo}/>
          LINKEDIN: linkedin.com/in/g-erm/

        </motion.a>

        <p>
          <motion.a 
            whileHover={{color: "white"}} 
            className="contact-info" 
            href="mailto:tanyuting.gt@gmail.com">

            <img className="contact-logo" src={maillogo}/>
            E-MAIL: tanyuting.gt@gmail.com

          </motion.a>
        </p>
      </div>

    </motion.div>
  )
}
 
export default Contact;