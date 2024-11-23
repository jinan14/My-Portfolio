import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredP, setIsHoveredP] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="NavImg">
            <img src="/png.png" alt="logo image" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#connect" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>About</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a
                 href="mailto:jinanghanam@gmail.com "
                onMouseEnter={() => setIsHovered(true)} // When mouse enters
                onMouseLeave={() => setIsHovered(false)} // When mouse leaves
              >
                <img src={isHovered ? '/emailImg.png' : '/email (1).png'} 
                  alt="Email icon" />
              </a>
              <a
                className="email-href social-icon" href="tel:76544123"
                onMouseEnter={() => setIsHoveredP(true)} // When mouse enters
                onMouseLeave={() => setIsHoveredP(false)} // When mouse leaves
              >
                <img src={isHoveredP ? '/telephone.png' : '/telephoneWhite.png'} 
                  alt="phone icon" />
              </a>
                <a href="https://www.linkedin.com/in/jinan-ghannam-803bb1332/"><img src={navIcon1} alt="linkedin icon image" /></a>
                <a href="https://github.com/jinan14"><img src="/github-mark-white.png" alt="github icon image" /></a>
                <a href="https://www.instagram.com/jinan._.ghannam/profilecard/?igsh=MXV3NXM3emd2MTEzag=="><img src={navIcon3} alt="instagram icon image" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
