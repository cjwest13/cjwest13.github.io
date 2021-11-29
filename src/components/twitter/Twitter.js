import React, { useEffect } from 'react';
import { Timeline } from 'react-twitter-widgets'
import { useMediaQuery } from 'react-responsive';
import '../../styles/Twitter.css';

const Twitter = () => {
  
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)'
    }
  );

  const systemPrefersLight = useMediaQuery(
    {
      query: '(prefers-color-scheme: light)'
    }
  );

  // useEffect(() => {
  //   Aos.init({ duration: 2000 })
  // }, []);

  return (
    <div className='inverse-section' id="follow-us">
      <div className="container">
        <div className="centerText" id="follow-text">
          <h1>Follow Clifton <a href="https://twitter.com/cliftonwestjr"> @CliftonWestJr</a></h1>
        </div>
        <div className="tweets">
          {systemPrefersDark && <Timeline
              dataSource = {{ sourceType: "profile", screenName: "CliftonWestJr" }}
              options= {{ theme: "dark", width: "400", height: "600" }}
            />}
          {systemPrefersLight && <Timeline
              dataSource = {{ sourceType: "profile", screenName: "CliftonWestJr" }}
              options= {{ width: "400", height: "600" }}
            />}
        </div>
      </div>
    </div>
  )

}

export default Twitter;