import React, { useState, useRef, useEffect } from "react";
// import Item1 from "../assets/images/web-app.png";
// import Item2 from "../assets/images/branding.png";
// import Item3 from "../assets/images/development-image.png";
// import Item4 from "../assets/images/socialMedia.png";
import Item1 from "../assets/images/webdesignnew.png";
import Item2 from "../assets/images/BRANDINGNEW1.png";
import Item3 from "../assets/images/developmentnew1.png";
import Item4 from "../assets/images/socialmedianew11.png";
import mobileItem1 from "../assets/images/mobile-app-development.png";
import mobileItem2 from "../assets/images/mobile-branding-image.png";
import mobileItem3 from "../assets/images/mobile-development-image.png";
import mobileItem4 from "../assets/images/mobile-socialmedia.png";
import LeftArrow from "../assets/images/left-arrow.svg";
import RightArrow from "../assets/images/right-arrow.svg";
import TabArrow from "../assets/images/right_arrow_icon.svg";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
// import 'swiper/swiper-bundle.min.css';

import config from "../config";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectFade,
  Thumbs,
  FreeMode,
  Pagination,
} from "swiper/modules";
import { useNavigate } from "react-router-dom";

function ServiceTabsPanel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  // const [services, setServices] = useState([]);
  const [imageArray, setImageArray] = useState([]);
  const tabRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const navigate = useNavigate();

  const services = [
    // {
    //     title: 'Consulting',
    //     description: 'App-like website design for portfolio, e-commerce, hospitality websites, and more.',
    //     icon: TabArrow, // Ensure TabArrow is imported or defined elsewhere
    //     image: Item1, // Update with actual image path
    // },
    {
        title: 'Web and App Design',
        description: 'app-like website design for portfolio, e-commerce, hospitality websites and more.',
        icon: TabArrow,
        image: Item1,
    },
    {
        title: 'Branding',
        description: 'brand strategy, identity, and execution across all mediums - digital or real life',
        icon: TabArrow,
        image: Item2,
    },
    {
        title: 'Development',
        description: 'fast, flexible, design-driven development for any functionality across platforms',
        icon: TabArrow,
        image: Item3,
    },
    {
        title: 'Social Media',
        description: 'scroll-stopping, elevated social media design and management ',
        icon: TabArrow,
        image: Item4,
    },
];


const mobileServices = [
  // {
  //     title: 'Consulting',
  //     description: 'App-like website design for portfolio, e-commerce, hospitality websites, and more.',
  //     icon: TabArrow, // Ensure TabArrow is imported or defined elsewhere
  //     image: Item1, // Update with actual image path
  // },
  {
      title: 'Web and App Design',
      description: 'app-like website design for portfolio, e-commerce, hospitality websites and more.',
      icon: TabArrow,
      image: mobileItem1,
  },
  {
      title: 'Branding',
      description: 'brand strategy, identity, and execution across all mediums - digital or real life',
      icon: TabArrow,
      image: mobileItem2,
  },
  {
      title: 'Development',
      description: 'fast, flexible, design-driven development for any functionality across platforms',
      icon: TabArrow,
      image: mobileItem3,
  },
  {
      title: 'Social Media',
      description: 'scroll-stopping, elevated social media design and management ',
      icon: TabArrow,
      image: mobileItem4,
  },
];


  // useEffect(() => {
  //   const fetchServices = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${config.BASE_URL}/api/admin/get-services`
  //       );
  //       var images = [];
  //       if (Array.isArray(response.data)) {
  //         setServices(response.data); // Set the fetched projects to state

  //         Promise.all(
  //           response.data.map((item) => {
  //             images.push({ image: item.featuredImage, des: item.description });
  //           })
  //         );

  //         setImageArray(images);
  //       } else {
  //         console.log("Unexpected response format");
  //       }
  //       // setProjects(response.data); // Set the fetched projects to state
  //     } catch (err) {
  //       console.log("Failed to fetch services");
  //     }
  //   };

  //   fetchServices();
  // }, []);

  useEffect(() => {
    if (tabRef.current) {
      const activeItem = tabRef.current.children[activeIndex];
      console.log("activeItem", activeItem);
      if (activeItem) {
        const tabRect = tabRef.current.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        const offset =
          itemRect.left + itemRect.width / 2 - tabRect.left - tabRect.width / 2;

        tabRef.current.scrollTo({
          left: offset,
          behavior: "smooth", // Optional: smooth scrolling
        });
      }
    }
  }, [activeIndex]);

  const renderDescription = (des) => {
    if (!des) return;
    var words = des.split(" ");
    words = words.slice(0, 3).join(" ");
    const removed = des.replace(words, "");

    return `<strong>${words}</strong> ${removed}`;
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const makeActiveItem = () => {
    setActiveIndex(1);
  };
  const increaseActiveIndex = () => {
    if (activeIndex + 1 < services.length) {
      setIsVisible(false);
      setTimeout(() => {
        setIsVisible(true);
      }, 300);
      setActiveIndex((index) => index + 1);
    }
  };
  const decreaseActiveIndex = () => {
    if (activeIndex - 1 >= 0) {
      setIsVisible(false);
      setTimeout(() => {
        setIsVisible(true);
      }, 300);
      setActiveIndex((index) => index - 1);
    }
  };

  console.log("services: ", services[activeIndex]);

  return (
    <>
      <div
        className="services_tabs_panel position-relative pb-120"
        id="milkbar-services"
      >
        <div className="service_tabs_wrapper destopservieview position-relative">
          {/* <div className='service_tab_items hideonmobile'> */}
          <div className="service_tab_items_wrapper ">
            <h6 className="services_tab_title">Services</h6>
            <div className="service_tab_items  flex gap-32" ref={tabRef}>
              <div className="service_tab_item_title_container flex flex-col gap-2">
                {services.map((item, index) => (
                  <div
                    className={`service_tab_item ${
                      activeIndex === index ? "active" : ""
                    }`} // Add 'active' class if current
                    key={index}
                    style={{ margin: "10px 0", cursor: "pointer" }} // Vertical spacing
                    onClick={() => {
                      setActiveIndex(index);
                      setIsVisible(false); // Update active index
                      setTimeout(() => {
                        setIsVisible(true);
                      }, 300);
                    }}
                  >
                    <div className="service-name">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className={`service_tab_item_content_container ${
                  isVisible ? "active" : ""
                }`}
              >
                <div className="service_desc">
                  <span className="icon">
                    <img
                      src={TabArrow}
                      alt={`${services[activeIndex]?.title} Icon`}
                    />
                  </span>
                  <div className="item_content_inner_container">
                    <span className="text">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: renderDescription(
                            services[activeIndex]?.description
                          ),
                        }}
                      />
                    </span>
                    <button
                      type="button"
                      className="get_a_quote_btn"
                      onClick={() => navigate("/contact")}
                    >
                      Get a Quote
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="59"
                        height="1"
                        viewBox="0 0 59 1"
                        fill="none"
                      >
                        <line
                          x1="0.888916"
                          y1="0.222236"
                          x2="58.6667"
                          y2="0.222236"
                          stroke="white"
                          stroke-width="0.444444"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`service_tab_images ${
              isVisible ? "service_tab_image_active" : ""
            }`}
          >
            <div className="active_service_content">
              <div className="active_service_title">
                {services[activeIndex]?.title}
              </div>
              <div className="active_service_description">
                {services[activeIndex]?.description}
              </div>
            </div>
            <img
              src={services[activeIndex]?.image}
              alt="services"
            />
          </div>
        </div>
        <div className="service_tabs_wrapper position-relative mobile-version">
          {/* <div className='service_tab_items hideonmobile'> */}
          <div className="service_tab_items_wrapper">
            <h6 className="services_tab_title">Services</h6>
            <div className="service_tab_items" ref={tabRef}>
              {services.map((item, index) => (
                <div
                  className={`service_tab_item ${
                    activeIndex === index ? "active" : ""
                  }`} // Add 'active' class if current
                  key={index}
                  style={{ margin: "10px 0", cursor: "pointer" }} // Vertical spacing
                  onClick={() => {
                    if (mainSwiperRef.current) {
                      mainSwiperRef.current.slideTo(index);
                      setActiveIndex(index); // Update active index
                    } else {
                      console.error("Swiper reference is not set yet");
                    }
                  }}
                >
                  <div className="service-name">
                    <h3 className="">{item.title}</h3>
                  </div>
                  <div className="service_desc">
                    <span className="icon">
                      <img src={TabArrow} alt={`${item.title} Icon`} />
                    </span>
                    <span className="text">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: renderDescription(item.description),
                        }}
                      />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="service_tab_images">
            <Swiper
              ref={mainSwiperRef}
              loop={false}
              slidesPerView={1}
              spaceBetween={10}
              effect={"slide"}
              thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
              modules={[FreeMode, EffectFade, Navigation, Pagination, Thumbs]}
              centeredSlides={false}
              pagination={{
                type: "progressbar",
                el: ".swiper-pagination",
              }}
              navigation={{
                nextEl: ".service-arrow-right",
                prevEl: ".service-arrow-left",
              }}
              scrollbar={{
                draggable: true,
                el: ".service-swiper-custom-scrollbar",
              }}
              breakpoints={{
                768: {
                  effect: "fade",
                  crossFade: true,
                  slidesPerView: 1,
                  allowTouchMove: false,
                  centeredSlides: true, // Use a colon here
                },
                320: {
                  centeredSlides: true, // Use a colon here
                  slidesPerView: 1,
                },
              }}
              className="mySwiper2"
              onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
            >
              {/* Swiper Slides */}
              {mobileServices.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={config.BASE_URL + item.image}
                    alt={`Slide ${index + 1}`}
                    className="hideonmobile hello"
                    style={{ objectFit: "contain" }}
                  />
                  <div className="showonmobile service-tab-mobile">
                    <div className="wrapper">
                      <div className="tab_content_heading">
                        <h3 className="" style={{ fontSize: "28px" }}>
                          {" "}
                          {item.title}
                        </h3>
                      </div>
                      <div className="tab_content_wrapper">
                        {/* <ul>
                                                    <li>brand direction</li>
                                                    <li>logo + icon design</li>
                                                    <li>photography + videography  direction</li>
                                                    <li>copywriting</li>
                                                </ul> */}

                        <p
                          className=" mt-5 "
                          style={{ fontSize: "16px" }}
                          dangerouslySetInnerHTML={{
                            __html: renderDescription(item.description),
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="mobile_tab_content showonmobile"
                      style={{
                        backgroundImage: `url(${item.image})`,
                      }}
                    ></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="slider_nav d-flex align-items-center justify-content-center nowrap">
            <button className="service-arrow-left arrow common_slider_arrow d-flex align-items-center justify-content-center">
              <img src={LeftArrow} alt="Left Arrow" />
            </button>
            <div className="service-swiper-custom-scrollbar swiper-pagination"></div>
            <button className="service-arrow-right arrow common_slider_arrow d-flex align-items-center justify-content-center">
              <img src={RightArrow} alt="Right Arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceTabsPanel;
