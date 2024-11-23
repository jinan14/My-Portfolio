

import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { MdOutlineMail } from "react-icons/md";
import React, { useState } from 'react';

export const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredP, setIsHoveredP] = useState(false);
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">

          <Col size={12} sm={6} className="logo">
            <img src="/png.png" alt="logo image" />
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
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
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
