import React from 'react';
// import Layout from '../layouts/Layout';
import Header from '../Components/Header';
import Team from '../Sections/Home/Team';
import Banner from '../Sections/Home/Banner';
import Couple from '../Sections/Home/Couple';
import Countdown from '../Sections/Home/Countdown';
import Gallery from '../Sections/Home/Gallery';
import News from '../Sections/Home/News';
import Clients from '../Sections/Home/Clients';
import Story from '../Sections/Home/Story';
// import Video from '../Sections/Home/Video';
import Team2 from '../Sections/Home/Team2';
import Testimonials from '../Sections/Home/Testimonials';
import BackToTop from '../Components/BackToTop';
import Footer from '../Components/Footer';

function Home() {
    return (
        <>
            <div className="page-wrapper">
                {/* <Layout HeaderStyle="four" FooterStyle="four"> */}
                    <Header />
                    <Banner />
                    <Couple />
                    <Countdown />
                    <Story />
                    {/* <Video /> */}
                    <Team />
                    <Team2 />
                    <Clients className="pt-0" />
                    <Testimonials />
                    <Gallery />
                    <News className="pt-0"/>
                    <BackToTop />
                    <Footer />
                {/* </Layout> */}
            </div>
        </>        
    );
}
export default Home;
