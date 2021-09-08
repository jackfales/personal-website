import React from 'react';
import './portfolio-webpage.scss';
import Landing from '../PortfolioWebpage/Landing/Landing';
import About from '../PortfolioWebpage/About/About';
import Experience from '../PortfolioWebpage/Experience/Experience';
import Projects from '../PortfolioWebpage/Projects/Projects';
import Contact from '../PortfolioWebpage/Contact/Contact';

export default function PortfolioWebpage() {

    return (
      <div className="portfolio-webpage">
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