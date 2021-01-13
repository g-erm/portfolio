import React from "react";
import Thumbnail from '../Thumbnail/Thumbnail';
import './Java.css';
import { motion } from 'framer-motion';
import timmi from '../../assets/Timmi.png';
import candidates from '../../assets/Candidates1.png';
import dsta from '../../assets/dsta.png';
 
function Java(props) {
  return (
    <motion.div 
      className="java-container"
      id="java"
      initial={{ x: '-200vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7, type: 'spring' }}>

      <h1 className="section-title">_Java</h1>
      
      <div className="aboutjava">
        Java is currently the programming language that I would say that I am most comfortable with. I have worked on several projects in Java, as listed below.
      </div>

      <Thumbnail
        link="https://github.com/g-erm/ip"
        image={timmi}
        title="Timmi the Task Manager"
        description="An individual chatbot project created using Java with GUI created with JavaFX developed as part of a software engineering module."
      />
      
      <Thumbnail
        link="https://github.com/g-erm/tp"
        image={candidates}
        title="CANdidates"
        description="Mostly developed using Java with GUI created with JavaFX, CANdidates was developed with 4 other developers as part of a software engineering module following standard Git workflow."
      />
      
      <Thumbnail
        link="https://github.com/g-erm/DSTA-CODE_EXP-2020"
        image={dsta}
        title="DSTA CODE_EXP 2020 Hackathon"
        description="Worked together with 4 other developers to develop an “all-in-one” Android application targeted at the elderly amongst the COVID-19 situation using Android Studio in Java programming language."
      />
      
    </motion.div>
  )
}
 
export default Java;