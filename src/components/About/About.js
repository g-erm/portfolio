import React from "react";
import profile from '../../assets/squarepic.jpg';
import './About.css';
 
function About(props) {
  return (
    <div>

      <h1>g-erm</h1>
      <table className="introcontainer">
        <tr>
          <th style={{width: '30%'}}><img className="profile" src={profile} alt="Profile Picture"/></th>
          <th style={{width: '70%'}}>
            <h3 className="introheader">Hello there! I am Germaine Tan.</h3>
            <text>I am currently in my second year of pursuing a Bachelor's Degree in Computer Science at National University of Singapore.</text>
          </th>
        </tr>
      </table>
    </div>
  )
}
 
export default About;