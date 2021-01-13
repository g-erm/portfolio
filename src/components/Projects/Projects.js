import React from "react";
import Thumbnail from '../Thumbnail/Thumbnail';
import './Projects.css';
import { motion } from 'framer-motion';
 
function Projects(props) {
  return (
    <motion.div 
      id="projects"
      initial={{ x: '-200vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7, type: 'spring' }}>

      <h1>Projects</h1>

      <Thumbnail
        link="/twitter"
        image="https://www.flaticon.com/svg/vstatic/svg/124/124021.svg?token=exp=1610434599~hmac=e5537dabcca078005df47d561b32bbc5"
        title="Twitter Newsfeed"
        description="co laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      
      <Thumbnail
        link="/airbnb"
        image="https://www.flaticon.com/svg/vstatic/svg/124/124021.svg?token=exp=1610434599~hmac=e5537dabcca078005df47d561b32bbc5"
        title="Airbnb Experiences"
        description="co laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offic"
      />
      
      <Thumbnail
        link="/photoshop"
        image="https://www.flaticon.com/svg/vstatic/svg/124/124021.svg?token=exp=1610434599~hmac=e5537dabcca078005df47d561b32bbc5"
        title="Photoshop Redesign"
        description="co laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offic App"
      />
      
    </motion.div>
  )
}
 
export default Projects;