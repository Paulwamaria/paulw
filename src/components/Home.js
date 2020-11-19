import React, { Component, Fragment } from "react";
import avatar from "../assets/avatars/meboss.JPG";

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <h3 className="text-center text-white mt-2 funnyFonts px-1">
          Welcome to my personal website:
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
              <h4 className="text-center text-white funnyFonts mb-2">
                Paul Wamaria
              </h4 >
              <h3 className="text-center text-white funnyFonts mb-2">A Passionate Full Stack Developer</h3>

            </div>
            <div className="col-md-6 #9699bb">
              <div className=" text-white hoverLight overflow-auto mt-3">
                <div className=" pl-5 ">
                  <h4 className="text-center funnyFonts">Who am I?</h4>
                </div>
                <div className="card-body pl-5 mt-3">
                  <p>
                    I am a passionate full-stack developer with experience in
                    the software development life cycle. From design,
                    development, to production, I have familiarized myself with
                    tools such as Photoshop, Illustrator, Python, Javascript,
                    Django, React, Flask, Angular, React-redux among others. I
                    am also comfortable creating and consuming APIs. Recently, I
                    have developed a keen interest in cloud services. Exercising
                    is my way of decompressing. If I am not coding, or by any
                    chance, if I need to get away from the bugs for a while,
                    you’ll either find me in the dojo kicking and punching or on
                    a yoga mat stretching. I consider having a growth mindset as
                    my greatest asset because it compels me to seek a
                    challenging and dynamic environment where I can grow.
                  </p>
                  
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
