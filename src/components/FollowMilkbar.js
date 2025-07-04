import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/images/follow-media1.jpg";
import Image2 from "../assets/images/follow-media2.jpg";
import Image3 from "../assets/images/follow-media3.jpg";
import Image4 from "../assets/images/follow-media4.jpg";
import Image5 from "../assets/images/follow-media5.jpg";
// import Image6 from "../assets/images/follow-media6.jpg";
// import Image7 from "../assets/images/follow-media7.jpg";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

function FollowMilkbar() {
  const gallery_slider = {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2.8,
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
      },
      440: {
        slidesPerView: 2.4,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
      },
      768: {
        slidesPerView: 2.4,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
        centeredSlides: false,
        loop: true,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 10,
        centeredSlides: false,
        loop: true,
      },
    },
  };
  return (
    <div className="follow_milkbar pb-120">
      <div className="">
        <div className="follow_milkbar_top">
          <div className="follow_milkbar_top_inner d-flex justify-content-center">
            <div className="follow_milkbar_top_left">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M56.1362 35.7449L55.6796 35.8257L55.2498 36.4801L54.8199 37.1344L54.594 37.6226L54.368 38.1107L54.1717 38.0303L53.9754 37.95L52.7976 37.6299L51.6198 37.3097L50.3765 37.3668L49.1333 37.4239L48.1674 37.7627L47.2014 38.1017L46.4661 38.5895L45.7307 39.0776L45.0556 39.7798L44.3803 40.482L43.8469 41.5072L43.3136 42.5326L43.1092 43.4323L42.9049 44.3322L42.8367 44.5612L42.7685 44.7902H42.5385H42.3084L42.0238 45.093L41.7393 45.396V45.8188V46.2417L42.0605 46.5628L42.3817 46.8841H42.5092H42.6366L42.7812 47.5711L42.9258 48.2582L43.2487 51.1898L43.5714 54.1213L43.574 55.0504L43.5765 55.9794L43.7718 57.419L43.967 58.8585L44.3536 61.9173L44.7402 64.9761L44.9513 65.2981L45.1622 65.6201L45.6059 65.8055L46.0495 65.9908L50.7977 65.9903L55.5458 65.9899L55.9628 65.7356L56.3797 65.4813L56.5233 65.2131L56.667 64.9448L56.7893 64.2573L56.9117 63.5697L57.4341 59.1857L57.9565 54.8016L58.0379 53.2312L58.1192 51.6608L58.3751 49.5014L58.631 47.3421L58.7004 47.1131L58.7698 46.8841H58.8739H58.9781L59.3232 46.5391L59.6682 46.194V45.8761V45.5583L59.5268 45.294L59.3854 45.0298L58.9379 44.8428L58.4904 44.6558V44.3623V44.0687L58.1174 42.9306L57.7445 41.7924L57.2995 41.0568L56.8545 40.3212L56.2224 39.6112L55.5903 38.9011L55.7644 38.9007L55.9384 38.9002L56.3265 38.181L56.7145 37.4616L59.9253 37.4596L63.1362 37.4575L63.3073 37.349L63.4784 37.2406L63.4382 36.5331L63.3979 35.8257L62.7436 35.7391L62.0892 35.6523L59.341 35.6581L56.5928 35.6639L56.1362 35.7449ZM62.809 36.5433V36.6719L59.5085 36.7069L56.2082 36.7418L55.663 37.7023L55.1178 38.6628L55.0245 38.5119L54.9313 38.3612L55.1201 38.1404L55.309 37.9196L55.7314 37.1671L56.154 36.4146H59.4814H62.809V36.5433ZM52.4704 38.1446L52.9285 38.2828L53.8962 38.8106L54.8641 39.3382L55.6877 40.1087L56.5112 40.8791L56.8557 41.4668L57.2001 42.0547L57.4527 42.7886L57.7051 43.5225V44.1564V44.7902H50.7037H43.7023V44.1389V43.4875L44.0357 42.6016L44.3692 41.7157L44.8537 41.0114L45.3381 40.3071L45.9866 39.7236L46.635 39.1401L47.286 38.8103L47.9369 38.4804L48.4697 38.2824L49.0024 38.0843L49.8531 37.9991L50.7037 37.9139L51.3581 37.9601L52.0124 38.0064L52.4704 38.1446ZM53.6989 39.2702L53.5672 39.3592L52.3547 41.5415L51.1423 43.724L51.275 43.9719L51.4075 44.2197L51.936 44.4581L52.4644 44.6964L52.6421 44.5489L52.8197 44.4015L53.0697 43.9088L53.3198 43.4161L54.1484 41.9454L54.9771 40.4746L55.0979 40.3998L55.2187 40.3252V40.2114V40.0977L55.0186 39.8976L54.8185 39.6975L54.6257 39.7714L54.4329 39.8454L53.3742 41.7289L52.3154 43.6124H52.1965H52.0778V43.5442V43.4759L52.386 42.988L52.6942 42.5L53.4262 41.1913L54.1581 39.8827L54.2406 39.6637L54.3229 39.4446L54.0767 39.3129L53.8304 39.1812L53.6989 39.2702ZM58.9484 45.8371V46.0334H50.7055H42.4626L42.4183 45.8035L42.374 45.5734L50.6612 45.6072L58.9484 45.6408V45.8371ZM56.1748 46.8387L57.9576 46.9243L57.9101 47.0023L57.8627 47.0804L57.7099 48.7817L57.557 50.483L57.4257 51.0961L57.2945 51.7091L57.0867 51.8813L56.8788 52.0534L56.9659 51.5889L57.0528 51.1246L56.8867 50.8974L56.7205 50.6702L56.4999 50.8384L56.2792 51.0064L56.0283 52.9243L55.7776 54.8422L55.4962 55.2374L55.215 55.6325L54.5298 55.8713L53.8445 56.1103L51.0963 56.1084L48.3481 56.1065L46.974 55.8662L45.5999 55.6261L45.0443 55.385L44.4888 55.1441L44.3646 54.842L44.2404 54.5399L43.9631 52.1842L43.6859 49.8286L43.6096 48.3643L43.5333 46.8999L44.1739 46.8502L44.8147 46.8003L49.6034 46.7768L54.3921 46.7532L56.1748 46.8387ZM56.5907 47.6963L56.514 48.002L56.5534 48.914L56.5928 49.8259L56.8171 49.8687L57.0415 49.9115L57.1236 49.5845L57.2056 49.2576L57.2263 48.3652L57.2471 47.473L56.9572 47.4318L56.6675 47.3905L56.5907 47.6963Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="follow_milkbar_top_right">
              <h2>follow Milkbar</h2>
              <a
                href="https://www.instagram.com/themilkbar.co"
                target="_blank"
                className="follow_button"
              >
                follow us
              </a>
            </div>
          </div>
        </div>
        <div className="follow_milkbar_bottom">
          <Swiper {...gallery_slider} className="follow_media_grid">
            <SwiperSlide className="follow_media_image">
              <img src={Image1} alt="IMage" />
            </SwiperSlide>
            <SwiperSlide className="follow_media_image">
              <img src={Image2} alt="IMage" />
            </SwiperSlide>
            <SwiperSlide className="follow_media_image">
              <img src={Image3} alt="IMage" />
            </SwiperSlide>
            <SwiperSlide className="follow_media_image">
              <img src={Image4} alt="IMage" />
            </SwiperSlide>
            <SwiperSlide className="follow_media_image">
              <img src={Image5} alt="IMage" />
            </SwiperSlide>
            <SwiperSlide className="follow_media_image">
              <img src={Image1} alt="IMage" />
            </SwiperSlide>
            <SwiperSlide className="follow_media_image">
              <img src={Image2} alt="IMage" />
            </SwiperSlide>
            <SwiperSlide className="follow_media_image">
              <img src={Image3} alt="IMage" />
            </SwiperSlide>
            <SwiperSlide className="follow_media_image">
              <img src={Image4} alt="IMage" />
            </SwiperSlide>
            <SwiperSlide className="follow_media_image">
              <img src={Image5} alt="IMage" />
            </SwiperSlide>
            {/* <SwiperSlide className="follow_media_image">
              <img src={Image1} alt="IMage" />
            </SwiperSlide> */}
            {/* <SwiperSlide className="follow_media_image">
              <img src={Image1} alt="IMage" />
            </SwiperSlide>  */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default FollowMilkbar;
