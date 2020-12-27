import React from "react";
import Button from "./button";
import { VscGithubAlt } from "react-icons/vsc";

function Home() {
  return (
    <div className="homepage">
      <h1>Kamsi Eduzor</h1>
      <h3> I am a Full-Stack Developer. </h3>
      <h4>
        I am a technology enthusiast and a computer science undergraduate, <br/>
        proficient in Javascript, React, SQL, HTML, CSS and so on <br/> with
        experience in web development, Business Intelligence and Outreach
        Services.<br/> I am an efficient and analytical web developer with good<br/>
        multi-tasking and problem solving skills.
      </h4>

      <Button></Button>
      <div className="footer">
        <div className="home_icons">
          <a href="https://github.com/eduzorkamsi">
            <VscGithubAlt className="github"></VscGithubAlt>
          </a>
          <a href="https://twitter.com/@kamsizoe">
            <i class="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/kamsi-eduzor-a76a2b143//">
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
export default Home;
