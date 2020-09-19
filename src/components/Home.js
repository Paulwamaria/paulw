import React, { Component, Fragment } from "react";
import avatar from "../assets/avatars/meboss.JPG";

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <h3 className="text-center text-white mt-5 funnyFonts px-1">
          Welcome to Paul Wamaria's Website
        </h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 #9699bb">
              <div className="profilediv overflow-hidden mb-2 mx-auto mt-3">
                <img
                  className="img-responsive profileImage mx-auto"
                  src={avatar}
                  alt="avatar"
                />{" "}
              </div>
              <h3 className="text-center text-white funnyFonts mb-5">A Passionate Full Stack Developer</h3>
            </div>
            <div className="col-md-6 #9699bb">
              <div className=" text-white hoverLight overflow-auto mt-3" >
                <div className=" pl-5 ">
                  <h4 className="text-center funnyFonts">Who am I?</h4>
                </div>
                <div className="card-body pl-5 mt-3">
                  <p>
                    I am a passionate full-stack developer with expertise in
                    Python, Django, Javascript, React-Redux among others.
                    Recently, I have developed a keen interest in cloud
                    computing and currently learning Microsoft azure. Exercising
                    is my way of decompressing. If I am not coding, or by any
                    chance, if I need to get away from the bugs for a while,
                    you’ll either find me in the dojo kicking and punching or on
                    a yoga mat stretching. I consider having a growth mindset as
                    my greatest asset because it compels me to seek a dynamic
                    environment where I can grow.
                  </p>
                  <div className="text-center mt-2">
                    <a className="mx-auto mt-2" href="#">
                      {" "}
                      <button className="btn-info mx-auto">view skills</button>
                    </a>
                    <a className="mx-auto mt-2" href="#">
                      {" "}
                      <button className="btn-info mx-auto">
                        view projects
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
