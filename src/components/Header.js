// import React, { useEffect, useRef, useState } from 'react'; // Added useState import
// import { Link } from "react-router-dom";
// import Logo from "../assets/images/logo.svg";
// import UseSmoothScroll from '../components/UseSmoothScroll';
// import Navigation from '../components/Navigation';

// function Header() {
//     const scrollRef = useRef(null);
//     UseSmoothScroll(scrollRef);

//     const [scroll, setScroll] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScroll(window.scrollY > 100);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         <>
//             <header
//                 className={`position-absolute ${scroll ? "main-header sticky" : "main-header"}`}
//                 ref={scrollRef}
//             >
//                 <div className='header_top'>
//                     <Link to='/' className='header_logo'>
//                         <img src={Logo} alt="Logo" />
//                     </Link>
//                     <Link to='/contact' className='header_contact d-flex align-items-center justify-content-center'>
//                         <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M17.659 6.70781C17.7961 6.59883 18 6.70078 18 6.87305V14.0625C18 14.9941 17.2441 15.75 16.3125 15.75H1.6875C0.755859 15.75 0 14.9941 0 14.0625V6.87656C0 6.70078 0.200391 6.60234 0.341016 6.71133C1.12852 7.32305 2.17266 8.1 5.75859 10.7051C6.50039 11.2465 7.75195 12.3855 9 12.3785C10.2551 12.3891 11.5312 11.2254 12.2449 10.7051C15.8309 8.1 16.8715 7.31953 17.659 6.70781ZM9 11.25C9.81563 11.2641 10.9898 10.2234 11.5805 9.79453C16.2457 6.40898 16.6008 6.11367 17.6766 5.26992C17.8805 5.11172 18 4.86562 18 4.60547V3.9375C18 3.00586 17.2441 2.25 16.3125 2.25H1.6875C0.755859 2.25 0 3.00586 0 3.9375V4.60547C0 4.86562 0.119531 5.1082 0.323437 5.26992C1.39922 6.11016 1.7543 6.40898 6.41953 9.79453C7.01016 10.2234 8.18437 11.2641 9 11.25Z" fill="#A2BB3C"/>
//                         </svg>
//                     </Link>
//                 </div>
//                 <Navigation />
//             </header>
//         </>
//     );
// }

// export default Header;

import React, { useEffect, useRef, useState } from "react"; // Added useState import
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
// import UseSmoothScroll from "../components/UseSmoothScroll";
import Navigation from "../components/Navigation";

function Header() {
  const scrollRef = useRef(null);
  // UseSmoothScroll(scrollRef);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${
          scroll ? "main-header sticky" : "main-header"
        }`}
        ref={scrollRef}
      >
        <div className="header_top">
          <Link to="/" className="header_logo">
            <img src={Logo} alt="Logo" />
          </Link>
          <div className="mobile-header-container">
            <Link to="/" className="mobile_header_logo">
              <img src={Logo} alt="Logo" />
            </Link>
            <Link
              to="/contact"
              className="mobile_header_contact d-flex align-items-center justify-content-center"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.659 6.70781C17.7961 6.59883 18 6.70078 18 6.87305V14.0625C18 14.9941 17.2441 15.75 16.3125 15.75H1.6875C0.755859 15.75 0 14.9941 0 14.0625V6.87656C0 6.70078 0.200391 6.60234 0.341016 6.71133C1.12852 7.32305 2.17266 8.1 5.75859 10.7051C6.50039 11.2465 7.75195 12.3855 9 12.3785C10.2551 12.3891 11.5312 11.2254 12.2449 10.7051C15.8309 8.1 16.8715 7.31953 17.659 6.70781ZM9 11.25C9.81563 11.2641 10.9898 10.2234 11.5805 9.79453C16.2457 6.40898 16.6008 6.11367 17.6766 5.26992C17.8805 5.11172 18 4.86562 18 4.60547V3.9375C18 3.00586 17.2441 2.25 16.3125 2.25H1.6875C0.755859 2.25 0 3.00586 0 3.9375V4.60547C0 4.86562 0.119531 5.1082 0.323437 5.26992C1.39922 6.11016 1.7543 6.40898 6.41953 9.79453C7.01016 10.2234 8.18437 11.2641 9 11.25Z"
                  fill="#A2BB3C"
                />
              </svg>
            </Link>
          </div>
          <Navigation />
          <Link
            to="/contact"
            className="header_contact d-flex align-items-center justify-content-center"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.659 6.70781C17.7961 6.59883 18 6.70078 18 6.87305V14.0625C18 14.9941 17.2441 15.75 16.3125 15.75H1.6875C0.755859 15.75 0 14.9941 0 14.0625V6.87656C0 6.70078 0.200391 6.60234 0.341016 6.71133C1.12852 7.32305 2.17266 8.1 5.75859 10.7051C6.50039 11.2465 7.75195 12.3855 9 12.3785C10.2551 12.3891 11.5312 11.2254 12.2449 10.7051C15.8309 8.1 16.8715 7.31953 17.659 6.70781ZM9 11.25C9.81563 11.2641 10.9898 10.2234 11.5805 9.79453C16.2457 6.40898 16.6008 6.11367 17.6766 5.26992C17.8805 5.11172 18 4.86562 18 4.60547V3.9375C18 3.00586 17.2441 2.25 16.3125 2.25H1.6875C0.755859 2.25 0 3.00586 0 3.9375V4.60547C0 4.86562 0.119531 5.1082 0.323437 5.26992C1.39922 6.11016 1.7543 6.40898 6.41953 9.79453C7.01016 10.2234 8.18437 11.2641 9 11.25Z"
                fill="#A2BB3C"
              />
            </svg>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
