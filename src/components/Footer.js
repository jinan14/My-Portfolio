import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src="/png.png" alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jinan-ghannam-803bb1332/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/jinan14"><img src="/github-mark-white.png" alt="Icon" /></a>
              <a href="https://www.instagram.com/jinan._.ghannam/profilecard/?igsh=MXV3NXM3emd2MTEzag=="><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p> 
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
