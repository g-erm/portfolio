import React from "react";
import { motion } from 'framer-motion';
import Thumbnail from '../Thumbnail/Thumbnail';
import web from '../../assets/web.png';
 
function Webdev(props) {
  return (
    <motion.div 
      id="webdev"
      className="java-container"
      initial={{ x: '-200vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7, type: 'spring' }}>

      <h1 className="section-title">_Webdev</h1>
      <div className="aboutjava">
        Although not experienced in this area, web development is one of my interests that I wish to explore further in.
        Out of interest, I have been taking courses on HTML/CSS/JS as well as React.
      </div>

      <Thumbnail
        link="https://github.com/g-erm/portfolio"
        image={web}
        title="Portfolio"
        description="This current webpage you are seeing is my first web development project I've embarked on! 
        It is not very fancy, but I am pretty satisfied with the little animations I've managed to do.
        I do hope to slowly update and improve on it as I gain knowledge and experience from here on."
      />

    </motion.div>
  )
}
 
export default Webdev;