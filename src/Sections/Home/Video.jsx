import React, { useState } from 'react';
// import ModalVideo from 'react-modal-video';
import videoImage from '../../assets/images/resource/video-1.jpg'; 

const VideoSection = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <section className="video-section">
            <div className="icon-leaves-25 bounce-y"></div>
            <div className="icon-leaves-26 bounce-y"></div>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-7 order-lg-2 wow fadeInUp">
                        <div className="inner-column">
                            <div className="sec-title style-four">
                                <span className="sub-title">Wedding FRIDAY TO SUNDAY</span>
                                <h2>Thank you a lot <br /> for joining us.</h2>
                                <div className="text">
                                    The villa's garden is truly a work of art, with carefully cultivated <br />
                                    flower beds and winding paths that invite us to explore the natural <br />
                                    beauty around us.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video-column col-lg-5 wow fadeInUp">
                        <div className="inner-column">
                            <figure className="image">
                                <img src={videoImage} alt="Video Thumbnail" />
                            </figure>
                            <a onClick={() => setOpen(true)} className="play-btn">
                                <i className="icon fa fa-play" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="date-box-outer">
                    <div className="event-date-box">
                        <div className="icon-flower-21 zoom-one"></div>
                        <div className="icon-line"></div>
                        <div className="row">
                            <div className="date-block col-lg-6">
                                <div className="inner-box">
                                    <h4 className="title">Official Ceremony</h4>
                                    <div className="date">Monday, 12 Apr. 2024 <br /> 1:00 PM – 2:30 PM</div>
                                    <div className="address">4517 Washington Kentucky 39495</div>
                                </div>
                            </div>
                            <div className="date-block col-lg-6">
                                <div className="inner-box">
                                    <h4 className="title">Lunch at the villa</h4>
                                    <div className="date">Tuesday, 12 Apr. 2024 <br /> 1:00 PM – 2:30 PM</div>
                                    <div className="address">4517 Washington Kentucky 39495</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="Fvae8nxzVz4"
                onClose={() => setOpen(false)}
            />
        </section>
    );
};

export default VideoSection;
