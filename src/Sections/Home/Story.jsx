import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images
import storyImage1 from '../../assets/images/resource/story2-1.jpg';
import storyImage2 from '../../assets/images/resource/story2-2.jpg';

// Swiper options
const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 2, // Set to 1 for single view
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 2,
        },
    },
};

const slideData = [
  {
    icon: 'flaticon-wedding-arch',
    subTitle: 'Wedding',
    designation: 'Ceremony',
    text: 'Duis autem vel eum iriure dolor in vulp utate velit esse molestie consequat, vel illum olore eu feugiat Duis aut em vel eum iriure dolor in vulp utate.',
    image: storyImage1,
    alt: 'Ceremony'
  },
  {
    icon: 'flaticon-romantic-dinner',
    subTitle: 'Wedding',
    designation: 'Lunch Time',
    text: 'Duis autem vel eum iriure dolor in vulp utate velit esse molestie consequat, vel illum olore eu feugiat Duis aut em vel eum iriure dolor in vulp utate.',
    image: storyImage2,
    alt: 'Lunch Time'
  },
  {
    icon: 'flaticon-wedding-arch',
    subTitle: 'Wedding',
    designation: 'Ceremony',
    text: 'Duis autem vel eum iriure dolor in vulp utate velit esse molestie consequat, vel illum olore eu feugiat Duis aut em vel eum iriure dolor in vulp utate.',
    image: storyImage1,
    alt: 'Ceremony'
  },
  {
    icon: 'flaticon-romantic-dinner',
    subTitle: 'Wedding',
    designation: 'Lunch Time',
    text: 'Duis autem vel eum iriure dolor in vulp utate velit esse molestie consequat, vel illum olore eu feugiat Duis aut em vel eum iriure dolor in vulp utate.',
    image: storyImage2,
    alt: 'Lunch Time'
  },
];


const Story = () => {
    return (
        <section className="story-section-two pt-0">
            <div className="auto-container">
                <div className="sec-title style-four">
                    <span className="sub-title">Our Story</span>
                    <h2>Wedding Timeline</h2>
                </div>
                <div className="carousel-outer">
                    <Swiper {...swiperOptions} className="two-items-carousel owl-theme default-navs">
                        {slideData.map((slide, index) => (
                            <SwiperSlide key={index} className="story-block-two">
                                <div className="inner-box">
                                    <i className={`icon ${slide.icon}`}></i>
                                    <span className="sub-title">{slide.subTitle}</span>
                                    <div className="designation">{slide.designation}</div>
                                    <div className="text">
                                        {slide.text}
                                    </div>
                                    <div className="image-box">
                                        <figure className="image">
                                            <img src={slide.image} alt={slide.alt} />
                                        </figure>
                                        <div className="icon-leaves-16"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Story;
