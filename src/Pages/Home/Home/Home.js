import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Doctors from "../Doctors/Doctors";
import Features from "../Features/Features";
import Services from "../Services/Services";
import Special from "../Special/Special";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Features />
      <Services />
      <Special />
      <AppointmentBanner />
      <Testimonial />
      <Blog />
      <Doctors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
