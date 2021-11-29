// import Aos from 'aos';
import React, { useEffect } from 'react';
import '../../styles/Intro.css';
// import "aos/dist/aos.css";
import pic from '../../assets/Founder.png';

const Intro = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 })
  // }, []);

  return (
    <div className="section" id="intro">
      <div className="container">
        <div className="centerText" id="introText">
          {/* <h1 className="header-text">Bio</h1> */}
          <h2 className="small-text">Clifton West Jr is 29 years old and resides in Barrington, New Hampshire. 
          He is a full time software developer for Lincoln Financial Group, a parent, a husband and he co-founded <a href="https://www.blmseacoast.com/">Black Lives Matter Seacoast</a> in July 2020.
          He became the Executive Director of the organization & has led both political and social efforts for the organization with a focus of giving back to the community. 
          His quiet leadership and thoughtful communication skills are especially evident when breaks down difficult concepts into terms others can understand, which is so important when volunteering in stressful environments. 
          Clifton is dedicated to building a sustainable, equitable, and effective racial justice movement in New Hampshire.
          </h2>
        </div>
        <div className="image-box">
          <img src={pic} alt="Clifton West Jr"></img>
        </div>
      </div>

    </div>
  )
}

export default Intro;