import React from 'react';
import Header from '../Components/Header';
import Team from '../Sections/Home/Team';
import Banner from '../Sections/Home/Banner';
import Couple from '../Sections/Home/Couple';
import Countdown from '../Sections/Home/Countdown';
import Gallery from '../Sections/Home/Gallery';
import News from '../Sections/Home/News';
import Clients from '../Sections/Home/Clients';
import Story from '../Sections/Home/Story';
import Team2 from '../Sections/Home/Team2';
import Testimonials from '../Sections/Home/Testimonials';
import BackToTop from '../Components/BackToTop';
import Footer from '../Components/Footer';

function Home() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Banner />
                <Couple />
                <Countdown />
                <Story />
                <Team />
                <Team2 />
                <Clients className="pt-0" />
                <Testimonials />
                <Gallery />
                <News className="pt-0"/>
                <BackToTop />
                <Footer />
                
            </div>
        </>        
    );
}
export default Home;
