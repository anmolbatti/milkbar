import React, { useState, useEffect } from 'react';
import socialMediaStepImg from '../assets/images/social-stepsimg.png';
import step1imgmb from '../assets/images/step1imgmb.png';
import step2imgmb from '../assets/images/step2imgmb.png';
import step3imgmb from '../assets/images/step3imgmb.png';
// import step1img from '../assets/images/step1img.png';
// import step2img from '../assets/images/step2img.png';
// import step3img from '../assets/images/step3img.png';

// const stepsData = [
//     {
//       title: "DETERMINING",
//       highlightedTitle: "STYLE",
//       description: "We start with exercises to determine a feel for your social media and select concrete elements to serve as the basis for design.",
//       description1: "",
//       list: ["MOODBOARDING", "FINALIZE ELEMENTS", "PHOTOGRAPHY DIRECTION"],
//       img: step1img,
//       reverse: false
//     },
//     {
//       title: "CONTENT",
//       highlightedTitle: "PLANNING",
//       description: "We’ll decide on the frequency and type of content we will post per week and create a mock grid to review. ",
//       description1: "We’ll review template designs for each placement. ",
//       list: ["FREQUENCY", "CONTENT TYPES", "TEMPLATES"],
//       img: step2img,
//       reverse: true
//     },
//     {
//       title: "ONGOING",
//       highlightedTitle: "MANAGEMENT",
//       description: "We’ll decide on the frequency and type of content we will post per week and create a mock grid to review.",
//       description1: "We’ll review template designs for each placement. ",
//       list: ["ANALYTICS + REPORTING", "ADVERTISING", "STRATEGY UPDATES"],
//       img: step3img,
//       reverse: false
//     }
//   ];
  
  export default function SocialMediaSteps({ showTitle }) {
    const [isMobileView, setIsMobileView] = useState(false);
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };
    useEffect(() => {
      handleResize(); 
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize); 
      };
    }, []);
    return (
      <div className='social-media-steps'>
        <div className='social-media-steps-wraper d-flex wrap'>
        {isMobileView ? (
            <>
              <h5 className='font-14 font-messina letter-spacing-5 text-dark'>OUR PROCESS</h5>
              <div className='social-steps d-flex'>
                <img src={step1imgmb} alt="social-media" />
                <img src={step2imgmb} alt="social-media" />
                <img src={step3imgmb} alt="social-media" />
              </div>
            </>
        ) : (
           <>
           {showTitle && (
              <h2 className='font-messina text-dark fw-400 pb-80'>
                <span className='fw-100'>our</span> process
              </h2>
            )}
           <img src={socialMediaStepImg} alt="social-media" className="object-fit-cover" />
           </>
            
        )} 
          
         
          {/* {stepsData.map((step, index) => (
            <div className={`social-steps ${step.reverse ? 'reverse' : ''}`} key={index}>
              {!step.reverse ? (
                <>
                  <div className='step-box position-relative'>
                    <div className='step-box-top'>
                    <h5 className='font-16 font-messina fw-300'>
                      {step.title} <span className='fw-400'>{step.highlightedTitle}</span>
                    </h5>
                    <p className='font-14 font-messina'>{step.description}</p>
                        <p className='font-14 font-messina'>{step.description1}</p>
                    </div>
                    <div className='step-box-botm'>
                      <ul className='list-style-none'>
                        {step.list.map((item, i) => (
                          <li key={i} className='text-uppercase font-14 font-messina letter-spacing-5'>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className='step-box-img -mt-20'>
                    <img src={step.img} alt="step" />
                  </div>
                </>
              ) : (
                <>
                  <div className='step-box-img -mt-20'>
                    <img src={step.img} alt="step" />
                  </div>
                  <div className='step-box position-relative -mt-90'>
                    <div className='step-box-top'>
                        <h5 className='font-16 font-messina fw-300'>
                        {step.title} <span className='fw-400'>{step.highlightedTitle}</span>
                        </h5>
                        <p className='font-14 font-messina'>{step.description}</p>
                        <p className='font-14 font-messina'>{step.description1}</p>
                    </div>
                    <div className='step-box-botm'>
                      <ul className='list-style-none'>
                        {step.list.map((item, i) => (
                          <li key={i} className='text-uppercase font-14 font-messina letter-spacing-5'>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))} */}
        </div>
      </div>
    );
  }
  