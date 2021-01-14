import React from "react";
import { motion } from 'framer-motion';
import Thumbnail from '../Thumbnail/Thumbnail';
import unity from '../../assets/unity.png';
import android from '../../assets/android.png';
 
function Appdev(props) {
  return (
    <motion.div 
      id="appdev"
      className="java-container"
      initial={{ x: '-200vw' }}
      animate={{ x: 0 }}
      transition={{  delay: 1.4, duration: 1.3, type: 'spring' }}>

      <h1 className="section-title">_Appdev</h1>
      <div className="aboutjava">
        I have a little experience in app development using Unity and Android Studio before, as listed.
      </div>

      <Thumbnail
        link="https://github.com/g-erm/RnG"
        image={unity}
        title="RnG – Platformer Android Mobile Game"
        description="Worked in a team of 2 developers using Unity and C# programming language, I was mainly responsible for the design and workings of the actual gameplay."
      />

      <Thumbnail
        link="https://github.com/g-erm/DSTA-CODE_EXP-2020"
        image={android}
        title="DSTA CODE_EXP 2020 Hackathon"
        description="Worked together with 4 other developers to develop an “all-in-one” Android application targeted at the elderly amongst the COVID-19 situation using Android Studio in Java programming language."
      />

    </motion.div>
  )
}
 
export default Appdev;