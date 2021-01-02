import React from "react";
import Button from "./button";
import { VscGithubAlt } from "react-icons/vsc";

function Home() {
  return (
    <div className="homepage">
      <h1>Kamsi Eduzor</h1>
      <h3> I am a Front-End Developer. </h3>
      <h4>
        Reliable , motivated and organized with experience in web development.{" "}
        <br />
        Equipped with modern technologies and able to identify problems and
        deliver solutions
        <br />
        Proficient in web development, implementing features based on user
        feedback.
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
