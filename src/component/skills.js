import React from 'react';
import { VscGithubAlt } from 'react-icons/vsc';



function Skills() {
    return (
        <div className="Skills">
            <div className="Skills_header">
                <h3>Technical Skills</h3>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras <br></br>lectus magna sodales aenean condimentum auctor aliquet. </h4>

            </div>
            <div className="Skills_content">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">HTML</h5>
                                <p class="card-text">It is a long established fact that a reader will be distracted </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">CSS</h5>
                                <p class="card-text">It is a long established fact that a reader will be distracted </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">JavaScript</h5>
                                <p class="card-text">It is a long established fact that a reader will be distracted </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">MySQL</h5>
                                <p class="card-text">It is a long established fact that a reader will be distracted </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">CyberSkills</h5>
                                <p class="card-text">It is a long established fact that a reader will be distracted </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Business Intelligence</h5>
                                <p class="card-text">It is a long established fact that a reader will be distracted </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
            <div className="skill_icons">
      <a href="https://github.com/eduzorkamsi"><VscGithubAlt className="github"></VscGithubAlt></a>
      <a href="https://twitter.com/@kamsizoe"><i class="fab fa-twitter fa-lg"></i></a>
      <a href="https://www.linkedin.com/in/kamsi-eduzor-a76a2b143//"><i class="fab fa-linkedin-in fa-lg"></i></a>
      <a href="mailto:eduzorkamsi@gmail.com"><i class="fa fa-envelope fa-lg"></i></a>
    </div>
            </div>

        </div>
    );

}
export default Skills;