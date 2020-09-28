import React from 'react';
import { VscGithubAlt } from 'react-icons/vsc';
import image1 from "../img/Rectangle1.png";
import image2 from "../img/Rectangle2.png";
import image3 from "../img/Rectangle3.png";



function Projects() {
    return (
        <div className="Project">
            <div className="Project_header">
                <h3>Projects</h3>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras <br></br>lectus magna sodales aenean condimentum auctor aliquet. </h4>

            </div>
            <div className="project_contain_2">
                <div class="card-container">
                    <img src={image1}></img>
                    <div class="hoverText">
                        <div class="caption">
                        <h3>RippleTv</h3>
                        <h6>a streaming platform</h6>

                        <h6>I built the front-end using React,
Javascript, HTML & CSS</h6>
                        <h3><a className="link1" href="https://rippletv.netlify.app/">Check it out </a></h3>
                        </div>
                    </div>
                </div>

                <div class="card-container">
                    <img src={image2}></img>
                    <div class="hoverText">
                        <div class="caption">
                        <h3>Portfolio</h3>
                        <h6>a portfolio</h6>

                        <h6>I built the front-end using React,
Javascript, HTML & CSS</h6>
                        <h3><a className="link2" href="https://hfsportfolio.netlify.app/">Check it out </a></h3>
                        </div>
                    </div>
                </div>

                <div class="card-container">
                    <img src={image3}></img>
                    <div class="hoverText">
                        <div class="caption">
                        <h3>Spinero(in development)</h3>
                        <h6>e-commerce</h6>

                        <h6>I built the front-end using React,
Javascript, HTML & CSS</h6>
                        <h3><a className="link3" href="">Check it out </a></h3>

                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="project_icons">
                    <a href="https://github.com/eduzorkamsi"><VscGithubAlt className="github"></VscGithubAlt></a>
                    <a href="https://twitter.com/@kamsizoe"><i class="fab fa-twitter fa-lg"></i></a>
                    <a href="https://www.linkedin.com/in/kamsi-eduzor-a76a2b143//"><i class="fab fa-linkedin-in fa-lg"></i></a>
                    <a href="mailto:eduzorkamsi@gmail.com"><i class="fa fa-envelope fa-lg"></i></a>
                </div>

            </div>
     
           
        </div>


    );

}
export default Projects;