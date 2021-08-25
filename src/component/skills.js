import React from "react";
import { VscGithubAlt } from "react-icons/vsc";

function Skills() {
  return (
    <div className="Skills">
      <div className="Skills_header">
        <h3>Technical Skills</h3>
        <h4>My skills include</h4>
      </div>
      <div className="Skills_content">
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">HTML</h5>
                {/* <p class="card-text">It is a long established fact that a reader will be distracted </p> */}
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">CSS</h5>
                {/* <p class="card-text">It is a long established fact that a reader will be distracted </p> */}
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Java Script</h5>
                {/* <p class="card-text">It is a long established fact that a reader will be distracted </p> */}
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">React</h5>
                {/* <p class="card-text">It is a long established fact that a reader will be distracted </p> */}
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Ant-design/Tailwind</h5>
                {/* <p class="card-text">It is a long established fact that a reader will be distracted </p> */}
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">version control</h5>
                {/* <p class="card-text">It is a long established fact that a reader will be distracted </p> */}
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">QA</h5>
                {/* <p class="card-text">It is a long established fact that a reader will be distracted </p> */}
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">User Acceptance Testing</h5>
                {/* <p class="card-text">It is a long established fact that a reader will be distracted </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="skill_icons">
          <a href="https://github.com/eduzorkamsi">
            <VscGithubAlt className="github"></VscGithubAlt>
          </a>
          <a href="https://twitter.com/@EduzorKamsi">
            <i class="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/kamsi-eduzor">
            <i class="fab fa-linkedin-in fa-lg"></i>
          </a>
          <a href="mailto:eduzorkamsi@gmail.com">
            <i class="fa fa-envelope fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Skills;
