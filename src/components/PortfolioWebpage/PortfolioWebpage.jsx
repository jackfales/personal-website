import React from 'react';
import './portfolio-webpage.scss';
import About from './About/About';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import Landing from './Landing/Landing';
import Navbar from './Navbar/Navbar';
import Projects from '../PortfolioWebpage/Projects/Projects';

export default function PortfolioWebpage() {

    return (
      <div className="portfolio-webpage">
         <Navbar />
         <section className="landing-container">
            <Landing />
         </section>
         <section className="about-container">
            <About />
         </section>
         <section className="experience-container">
            <Experience />
         </section>
         <section className="projects-container">
            <Projects />
         </section>
         <section className="contact-container">
            <Contact />
         </section>
      </div>
    );
}