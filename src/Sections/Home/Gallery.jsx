import React from 'react';
import { Link } from 'react-router-dom';
import GalleryImage1 from '../../assets/images/resource/gallery7-1.jpg';
import GalleryImage2 from '../../assets/images/resource/gallery7-2.jpg';
import GalleryImage3 from '../../assets/images/resource/gallery7-3.jpg';
import GalleryImage4 from '../../assets/images/resource/gallery7-4.jpg';
import GalleryImage5 from '../../assets/images/resource/gallery7-5.jpg';
import GalleryImage6 from '../../assets/images/resource/gallery7-6.jpg';

const galleryImages = [
  { src: GalleryImage1, alt: "Gallery 1", link: "/gallery" },
  { src: GalleryImage2, alt: "Gallery 2", link: "/gallery" },
  { src: GalleryImage3, alt: "Gallery 3", link: "/gallery" },
  { src: GalleryImage4, alt: "Gallery 4", link: "/gallery" },
  { src: GalleryImage5, alt: "Gallery 5", link: "/gallery" },
  { src: GalleryImage6, alt: "Gallery 6", link: "/gallery" },
];

const Gallery = () => {
    return (
        <section className="gallery-section-seven">
            <div className="icon-leaves-21 bounce-y"></div>
            <div className="icon-leaves-22 bounce-y wow" data-wow-delay="5s"></div>
            <div className="auto-container">
                <div className="outer-container">
                    <div className="sec-title style-four">
                        <span className="sub-title">some beautiful memories</span>
                        <h2>Wedding Clicks</h2>
                        <Link to="/gallery" className="view-all">View all photos <i className="icon fa fa-angle-right"></i></Link>
                    </div>
                </div>
                <div className="row g-0">
                    {galleryImages.map((image, index) => (
                        <div key={index} className={`gallery-block-seven ${index % 2 === 0 ? 'style-two' : ''} col-lg-4 col-sm-6`}>
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim">
                                        <Link to={image.link} className="lightbox-image" data-fancybox="gallery">
                                            <img src={image.src} alt={image.alt} />
                                        </Link>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
