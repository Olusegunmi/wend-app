import React from 'react';
import { Link } from 'react-router-dom';
import NewsImage1 from '../../assets/images/resource/news3-1.jpg';
import NewsImage2 from '../../assets/images/resource/news3-2.jpg';
import NewsImage3 from '../../assets/images/resource/news3-3.jpg';
import NewsImage4 from '../../assets/images/resource/news3-4.jpg';
import NewsThumb from '../../assets/images/resource/news3-thumb.jpg';

const News = ({className}) => {
    return (
        <section className={`news-section-three ${className || ''}`}>
            <div className="auto-container">
                <div className="sec-title style-four text-center">
                    <span className="sub-title">News & Updates</span>
                    <h2>Recent Updates</h2>
                </div>
                <div className="row">
                    <div className="column col-xl-6">
                        <div className="news-block-three wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/news-details">
                                            <img src={NewsImage1} alt="Couple's wedding" />
                                        </Link>
                                    </figure>
                                </div>
                                <div className="content-box">
                                    <div className="category">Photography</div>
                                    <h3 className="title">
                                        <Link to="/news-details">Couple's wedding turns emotional as groom</Link>
                                    </h3>
                                    <div className="text">I'm filled with joy and excitement to be marrying the love of my life.</div>
                                    <div className="author-box">
                                        <img src={NewsThumb} alt="Author" />
                                        <div className="info-box">
                                            <div className="date">December 14, 2024</div>
                                            <h6 className="name">By Thomas Willimes</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="column col-xl-6">
                        {[NewsImage2, NewsImage3, NewsImage4].map((img, index) => (
                            <div className="news-block-four wow fadeInUp" key={index}>
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link to="/news-details">
                                                <img src={img} alt={`News ${index + 2}`} />
                                            </Link>
                                        </figure>
                                    </div>
                                    <div className="content-box">
                                        <div className="category">Photography</div>
                                        <h4 className="title">
                                            <Link to="/news-details">
                                                {index === 0 ? "10 Most Effective Tips For Handling Wedding" :
                                                index === 1 ? "Unique Lehenga Color Combinations We Spotted" :
                                                "Guide to Your Dream Wedding Day!"}
                                            </Link>
                                        </h4>
                                        <div className="author-box">
                                            <img src={NewsThumb} alt="Author" />
                                            <div className="info-box">
                                                <div className="date">December 14, 2024</div>
                                                <h6 className="name">By Thomas Willimes</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="btn-box text-center">
                    <Link to="/news" className="theme-btn btn-style-one">
                        <span className="btn-title">View all news</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default News;
