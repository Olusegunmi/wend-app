import React from 'react';
import { Link } from 'react-router-dom';
import TeamImage1 from '../../assets/images/resource/team4-4.jpg';
import TeamImage2 from '../../assets/images/resource/team4-5.jpg';
import TeamImage3 from '../../assets/images/resource/team4-6.jpg';

const teamData = [
  {
    name: "Jessica Loran",
    designation: "Bridesmaids",
    image: TeamImage1,
    alt: "Jessica Loran",
    link: "/team-details"
  },
  {
    name: "Moniqa Romi",
    designation: "Bridesmaids",
    image: TeamImage2,
    alt: "Moniqa Romi",
    link: "/team-details"
  },
  {
    name: "Biquioo Olive",
    designation: "Bridesmaids",
    image: TeamImage3,
    alt: "Biquioo Olive",
    link: "/team-details"
  }
];

const Team2 = () => {
    return (
        <section className="team-section-four pt-0">
            <div className="auto-container">
                <div className="sec-title style-four text-center">
                    <span className="sub-title">Wedding Friends</span>
                    <h2>The Bridesmaids</h2>
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

export default Team2;
