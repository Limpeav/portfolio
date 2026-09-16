import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const { personal, skills, projects, experience } = portfolioData;

  return (
    <div className="portfolio-app">
      <Navbar personal={personal} />
      <main id="main-content">
        <Hero personal={personal} />
        <About personal={personal} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Contact personal={personal} />
      </main>
      <Footer personal={personal} />
    </div>
  );
}
