import React, { Component } from "react";
import avatar from "../assets/avatars/meboss.JPG";

export class Hobbies extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
          <h3 className="text-center text-white funnyFonts mb-5">
            Things I love
          </h3>
          <div className="row">
            {/* music */}
            <div className="col-sm-4">
              <div className=" card-about text-white overflow-auto">
                <div className="card-header">Music</div>
                <div className="card-body mx-auto text-center">
                  <p>
                    My favourite genre is pop but you'll find me listening to
                    other genres every now and then.
                  </p>
                </div>
              </div>
            </div>
            {/* Travelling */}
            <div className="col-sm-4">
              <div className="profilediv overflow-hidden mb-2 mx-auto mt-3">
                <img
                  className="img-responsive profileImage mx-auto"
                  src={avatar}
                  alt="avatar"
                />{" "}
              </div>
            </div>
            {/* Novels */}
            <div className="col-sm-4">
              <div className=" card-about text-white overflow-auto">
                <div className="card-header">Novels</div>
                <div className="card-body mx-auto text-center">
                  <p>
                    Who am I without novels? Seeking growth has been my all time
                    life mantra, and the best way to grow is to read. I have no
                    favourites between fiction and non-fiction. I will read
                    anything as long as its a moving story.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {/* coding */}
            <div className="col-sm-4">
              <div className=" card-about text-white overflow-auto">
                <div className="card-header">Coding</div>
                <div className="card-body mx-auto text-center">
                  <p>
                    Imagine scratching your head the whole day, pulling out your
                    hair, and even forgetting to call your date. You start
                    questioning your career path until you realize "oh! I
                    misspelled a variable name...", then the feeling changes to
                    that of Neil Armstrong when he first landed on the moon. I
                    love those scenarios.
                  </p>
                </div>
              </div>
            </div>
            {/* Exercising */}
            <div className="col-sm-4">
              <div className=" card-about text-white overflow-auto">
                <div className="card-header">Exercising</div>
                <div className="card-body mx-auto text-center">
                  <p>
                    Yoga, aerobics, swimming...I like challenging my physical
                    fitness.
                  </p>
                </div>
              </div>
            </div>
            {/* Others */}
            <div className="col-sm-4">
              <div className=" card-about text-white overflow-auto">
                <div className="card-header">Others</div>
                <div className="card-body mx-auto text-center">
                  <ul>
                    <li>Travelling with no specific destination</li>
                    <li>
                      Movies with a sense of humor, fantasy, comedy, animation,
                      etc
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hobbies;
