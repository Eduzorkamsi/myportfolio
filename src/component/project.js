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
            <div className="image_card">
                <img className="card-img" src={image1} alt="" />
                <div class="middle">
                    <div class="text">
                        <h3>Hotspots</h3>
                        <h4>A mobile platform for finding locations.</h4>

                        <h4>I built the front-end using React,
Javascript, HTML & CSS</h4>
                        <h3><a href="https://rippletv.netlify.app/">Check it out </a></h3>
                    </div>
                </div>
                <img className="card-img" src={image2} alt="" />
                <div class="middle">
                    <div class="text">
                        <h3>Hotspots</h3>
                        <h4>A mobile platform for finding locations.</h4>

                        <h4>I built the front-end using React,
Javascript, HTML & CSS</h4>
                        <h3><a href="https://rippletv.netlify.app/">Check it out </a></h3>
                    </div>
                </div>
                <img className="card-img" src={image3} alt="" />
                <div class="middle">
                    <div class="text">
                        <h3>Hotspots</h3>
                        <h4>A mobile platform for finding locations.</h4>

                        <h4>I built the front-end using React,
Javascript, HTML & CSS</h4>
                        <h3><a href="https://rippletv.netlify.app/">Check it out </a></h3>

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