import React from "react";
import { motion } from 'framer-motion';
import Thumbnail from '../Thumbnail/Thumbnail';
 
function Appdev(props) {
  return (
    <motion.div 
      id="appdev"
      className="java-container"
      initial={{ x: '-200vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7, type: 'spring' }}>

      <h1>Appdev</h1>
      <div className="aboutjava">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tene
      </div>

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

    </motion.div>
  )
}
 
export default Appdev;