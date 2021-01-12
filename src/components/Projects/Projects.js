import React from "react";
import Thumbnail from '../Thumbnail/Thumbnail';
import './Projects.css';
import { motion } from 'framer-motion';
 
function Projects(props) {
  return (
    <motion.div 
      initial={{ x: '-200vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7, type: 'spring' }}>

      <h1>Projects</h1>

      <Thumbnail
        link="/twitter"
        image="https://www.flaticon.com/svg/vstatic/svg/124/124021.svg?token=exp=1610434599~hmac=e5537dabcca078005df47d561b32bbc5"
        title="Twitter Newsfeed"
        category="Mobile App"
      />
      
      <Thumbnail
        link="/airbnb"
        image="http://airbnb-image-url.jpg>"
        title="Airbnb Experiences"
        category="Website"
      />
      
      <Thumbnail
        link="/photoshop"
        image="http://photoshop-image-url.jpg"
        title="Photoshop Redesign"
        category="Desktop App"
      />
      
    </motion.div>
  )
}
 
export default Projects;