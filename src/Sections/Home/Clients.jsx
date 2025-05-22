import React from 'react';
import { Link } from 'react-router-dom';

import ClientImage1 from '../../assets/images/clients/2-1.png';
import ClientImage2 from '../../assets/images/clients/2-2.png';
import ClientImage3 from '../../assets/images/clients/2-5.png';
import ClientImage4 from '../../assets/images/clients/2-4.png';
import ClientImage5 from '../../assets/images/clients/2-3.png';
import ClientImage6 from '../../assets/images/clients/4-1.png';

const clientImages = [
  { src: ClientImage1, alt: "Client 1", link: "/gift" },
  { src: ClientImage2, alt: "Client 2", link: "/gift" },
  { src: ClientImage3, alt: "Client 3", link: "/gift" },
  { src: ClientImage4, alt: "Client 4", link: "/gift" },
  { src: ClientImage5, alt: "Client 5", link: "/gift" },
  { src: ClientImage6, alt: "Client 6", link: "/gift" }
];

const Clients= ({className}) => {
    return (
        <section className={`clients-section-four ${className}`}>
            <div className="icon-flower-15 bounce-y"></div>
            <div className="icon-flower-16 bounce-y"></div>
            <div className="auto-container">
                <div className="sec-title style-four">
                    <span className="sub-title">Thank you for giving</span>
                    <h2>Valuable Partners</h2>
                </div>
                <div className="outer-box wow fadeInUp">
                    {clientImages.map((client, index) => (
                        <div className="client-block-four" key={index}>
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to={client.link}>
                                            <img src={client.src} alt={client.alt} />
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

export default Clients;
