import React from 'react';
import coupleImage1 from '../../assets/images/resource/couple3-1.jpg'; 
function Couple() {
    return (
        <section id='event' className="couple-section-three">
            <span className="icon-flowers-12 bounce-y"></span>

            <div className="auto-container">
                <div className="outer-box">
                    <div className="anim-icons">
                        <div className="icon-flower-13"></div>
                        <div className="icon-flower-14"></div>
                    </div>
                    <div className="row">
                        <div className="couple-image-block-two col-lg-4 order-lg-2 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <img src={coupleImage1} alt="Couple" />
                                    </figure>
                                    <div className="icon-leaves-14"></div>
                                    <div className="icon-leaves-15"></div>
                                </div>
                            </div>
                        </div>

                        <div className="couple-block-three col-lg-4 col-sm-6 wow fadeInLeft" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="content-box">
                                    <span className="designation">The Bride</span>
                                    <h4 className="name">Kate Damson</h4>
                                    <div className="text">
                                        My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="couple-block-three style-two col-lg-4 col-sm-6 order-lg-3 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="content-box">
                                    <span className="designation">The Groom</span>
                                    <h4 className="name">Mike Walker</h4>
                                    <div className="text">
                                        My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Couple;
