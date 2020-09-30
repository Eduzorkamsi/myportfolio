import React from 'react';
import { VscGithubAlt } from 'react-icons/vsc';
import Button from './button';


function Contacts() {
    return (
        <div className="Contacts">
            <div className="Contact_header">
                <h3>Contact Me</h3>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras <br></br>lectus magna sodales aenean condimentum auctor aliquet. </h4>

            </div>
            <div>
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Subject</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Subject" rows="1"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Type your message" rows="3"></textarea>
  </div>
</form>
            </div>

            <Button></Button>
            <div className="footer">
                <div className="contact_icons">
                    <a href="https://github.com/eduzorkamsi"><VscGithubAlt className="github"></VscGithubAlt></a>
                    <a href="https://twitter.com/@kamsizoe"><i class="fab fa-twitter fa-lg"></i></a>
                    <a href="https://www.linkedin.com/in/kamsi-eduzor-a76a2b143//"><i class="fab fa-linkedin-in fa-lg"></i></a>
                    <a href="mailto:eduzorkamsi@gmail.com"><i class="fa fa-envelope fa-lg"></i></a>
                </div>
            </div>
        </div>
    );

}
export default Contacts;