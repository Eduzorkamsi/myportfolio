import React from "react";
import Button from "./button";
import { VscGithubAlt } from "react-icons/vsc";

function Home() {
  return (
    <div className="homepage">
      <h1>Kamsi Eduzor</h1>
      <h3>An Avid frontend developer </h3>
      <h4>
        Passionate about solving pertinent problems using technology. <br />
        Equipped with modern technologies and able to identify problems and
        deliver solutions
        <br />
        Experienced with software development best practices.
        <br /> I convert user stories into well-written, adequately tested, and
        efficient lines of code to build products with good user experience.
      </h4>

      <Button></Button>
      <div className="footer">
        <div className="home_icons">
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
export default Home;
