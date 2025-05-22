import React from 'react';

function Banner() {
    return (
        <section id="home" className="banner-section-four">
            <div className="bg bg-pattern-7"></div>
            <div className="auto-container">
                <div className="content-box">
                    <div className="banner-frame wow fadeIn" data-wow-delay="300ms"></div>
                    <div className="date wow fadeInUp" data-wow-delay="600ms">
                        Save Our Date <br /> <strong>17 . 09 . 25</strong>
                    </div>
                    <div className="name wow fadeInUp" data-wow-delay="900ms">
                        Kate<span>&</span>Mike
                    </div>
                    <span className="sub-title wow fadeInUp" data-wow-delay="1200ms">
                        are getting married
                    </span>
                    <div className="address wow fadeInUp" data-wow-delay="1500ms">
                        Borcue Church United State
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
