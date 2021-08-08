import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navigation from './Navigation'

const About = () => {
    return (
        <div>
          <div id='about-us-header'>
            
            <Container>
            <Navigation/>
              <Row>
              <Col>
                <h1>What do you want to know</h1>
                </Col>
                  </Row>
                  </Container>
                  </div>
                  <div id='about-author'>
                    <Container>
                      
                        <h1 id='author-name'>
                          About Chef
                          </h1>
                          <span id="author-img">
                      <img src='./images/author-img.png'/>
                      </span>
                      <div id="author-text">
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales erat quis molestie porttitor. Praesent sed luctus odio, id pellentesque nisl. Nulla rutrum maximus nulla, nec porttitor mauris pellentesque nec. Mauris tempus sapien nisl. Donec eget tempor lacus, vel gravida metus. Aenean urna odio, ultricies id ultricies sed, congue vel urna. Duis vel ipsum id est facilisis maximus. Curabitur ut leo consectetur, auctor metus quis, venenatis nunc. Aenean vulputate metus sit amet ullamcorper varius. Donec vulputate facilisis neque sit amet gravida. 
                    </p>
                    </div>
                    </Container>
                    </div>
                  
                  
                  <div id="about-us-vision">
                    <Container>
                    <h1 id="vision-heading">Vision</h1>
                    <span id="vision-img">
                      <img src='./images/vision-img.jpg'/> 
                      </span>
                      <div id="vision-info">
                      <p>
                      As of today the consumers are attracted more towards the idea of healthy lifestyle and yet that niche of the food industry is untapped. Kratos NutriKitchen aims to provide quality food packed with healthy macro nutrients. The company wants to reach every other doorstep in the country and make Kratos NutriKitchen a household name. We aim to provide products at an affordable price point to stay competetive and yet move ahead of our competetion through our taste, hardwork and ever lasting quality.
                      </p>
                      </div>
                    </Container>
                  </div>
                </div>
                )
              }

export default About
