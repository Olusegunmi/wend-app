import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.owl-next',
        prevEl: '.owl-prev',
    },
    loop: true,
};

const testimonials = [
  {
    quote: "You have always been someone I can count on, and I hope you know that I'll always be here for you. I can't wait to see what the future holds for you and your partner Christin.",
    name: "Rose Marko",
    designation: "Bride best friend, Aunt"
  },
  {
    quote: "You have always been someone I can count on, and I hope you know that I'll always be here for you. I can't wait to see what the future holds for you and your partner Christin.",
    name: "Rafe Cameron",
    designation: "Groom best friend, Uncle"
  }
];

const Testimonials = () => {
    return (
        <section className="testimonial-section-three overflow-hidden">
            <div className="icon-flower-17 zoom-two"></div>
            <div className="icon-flower-18 zoom-two"></div>
            <div className="auto-container">
                <div className="sec-title style-four text-center">
                    <span className="sub-title">Client’s Reviews</span>
                    <h2>thank you for the <br /> best wishes</h2>
                </div>                
                <div className="testimonial-carousel-two default-navs-two">
                    <div className="owl-nav">
                        <div className='owl-prev'><span>Prev</span></div>
                        <div className='owl-next'><span>Next</span></div>
                    </div>
                    <Swiper {...swiperOptions}>
                      {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                          <div className="testimonial-block-three">
                            <div className="inner-box">
                              <div className="testi3-frame"></div>
                              <div className="content-box">
                                <div className="icon icon-quote"></div>
                                <div className="text">“{testimonial.quote}”</div>
                                <div className="name">
                                  {testimonial.name} <br /> <span className="designation">{testimonial.designation}</span>
                                </div>
                              </div>
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

export default Testimonials;
