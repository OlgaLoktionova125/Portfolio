import { createRef, useEffect, useState } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Promo from '../Promo/Promo';
import Skills from '../Skills/Skills';
import './App.css';

function App() {

    const [isMainActive, setIsMainActive] = useState(false);
    const [isProjectsActive, setIsProjectActive] = useState(false);
    const [isAboutMeActive, setIsAboutMeActive] = useState(false);
    const [isContactsActive, setIsContactsActive] = useState(false);

    const mainRef = createRef();
    const projectsRef = createRef();
    const aboutMeRef = createRef();
    const contactsRef = createRef();
    
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entrie) => {
          if (entrie.target.id === 'promo' && entrie.isIntersecting) {
            setIsMainActive(true);
            setIsProjectActive(false);
            setIsAboutMeActive(false);
            setIsContactsActive(false);
          } else if(entrie.target.id === 'projects' && entrie.isIntersecting) {
            setIsMainActive(false);
            setIsProjectActive(true);
            setIsAboutMeActive(false);
            setIsContactsActive(false);
          } else if(entrie.target.id === 'aboutMe' && entrie.isIntersecting) {
            setIsMainActive(false);
            setIsProjectActive(false);
            setIsAboutMeActive(true);
            setIsContactsActive(false);
          } else if(entrie.target.id === 'contacts' && entrie.isIntersecting) {
            setIsMainActive(false);
            setIsProjectActive(false);
            setIsAboutMeActive(false);
            setIsContactsActive(true);
          }
        })
      }, {
        threshold: 0.7
      });
      observer.observe(mainRef.current);
      observer.observe(projectsRef.current);
      observer.observe(aboutMeRef.current);
      observer.observe(contactsRef.current);
    },[aboutMeRef, contactsRef, mainRef, projectsRef]);

  return (
    <div className='app'>
      <div className='app__page' id='main'>
        <Header isMainActive={isMainActive} isProjectsActive={isProjectsActive} isAboutMeActive={isAboutMeActive} isContactsActive={isContactsActive}/>
        <main>
          <Promo ref={mainRef}/>
          <Projects ref={projectsRef}/>
          <AboutMe ref={aboutMeRef}/>
          <Skills />
          <Contacts ref={contactsRef}/>
        </main>
        <Footer />        
      </div>
    </div>
  );
}

export default App;
