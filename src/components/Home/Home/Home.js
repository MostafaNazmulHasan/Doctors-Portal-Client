import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import MakeAppointment from '../../../components/Home/MakeAppointment/MakeAppointment'
import FeaturedService from '../FeaturedService/FeaturedService';
import Testimonials from '../../../components/Home/Testimonials/Testimonials';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;