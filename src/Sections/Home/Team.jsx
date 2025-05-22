import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';

import TeamImage1 from '../../assets/images/resource/team4-1.jpg';
import TeamImage2 from '../../assets/images/resource/team4-2.jpg';
import TeamImage3 from '../../assets/images/resource/team4-3.jpg';

const teamData = [
  {
    name: "Petar Walker",
    designation: "Groomsmen",
    image: TeamImage1,
    alt: "Petar Walker",
    link: "/team-details"
  },
  {
    name: "Qarlos Robin",
    designation: "Groomsmen",
    image: TeamImage2,
    alt: "Qarlos Robin",
    link: "/team-details"
  },
  {
    name: "Rokki Ilues",
    designation: "Groomsmen",
    image: TeamImage3,
    alt: "Rokki Ilues",
    link: "/team-details"
  }
];

const Team = () => {
    return (
        <section className="team-section-four">
            <div className="auto-container">
                <div className="sec-title style-four text-center">
                    <span className="sub-title">Wedding Friends</span>
                    <h2>The Groomsmen</h2>
                </div>
                <div className="row">
                    {teamData.map((member, index) => (
                        <div key={index} className="team-block-four col-lg-4 col-md-6 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim">
                                        <Link to={member.link}>
                                            <img src={member.image} alt={member.alt} />
                                        </Link>
                                    </figure>
                                    <div className="icon-leaves-17"></div>
                                    <div className="icon-leaves-18"></div>
                                </div>
                                <div className="content-box">
                                    <h6 className="name">
                                        <Link to={member.link}>{member.name}</Link>
                                    </h6>
                                    <span className="designation">{member.designation}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
