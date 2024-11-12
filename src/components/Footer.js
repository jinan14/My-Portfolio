

import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
        
          <Col size={12} sm={6}>
            <img src="/png.png" alt="logo image" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
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
