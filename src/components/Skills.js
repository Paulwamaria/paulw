import React, { Component } from "react";
import python from "../assets/logos/python.png";
import javascript from "../assets/logos/js.png";
import hyper from "../assets/logos/linguafranca.png";
import style from "../assets/logos/styles.png";
import django from "../assets/logos/django.png";
import flask from "../assets/logos/flask.png";
import angular from "../assets/logos/angular.png";
import fav from "../assets/logos/reactjs.png";
import nodejs from "../assets/logos/nodejs.png";
import postgress from "../assets/logos/postgress.png";
import photoshop from "../assets/logos/photoshop.png";
import illustrator from "../assets/logos/illustrator.png";
import aftereffects from "../assets/logos/aftereffects.png";
import figma from "../assets/logos/figma.png";
import jq from "../assets/logos/jq.png";
import boot from "../assets/logos/bootstrap.png";
import maya from "../assets/logos/maya.png";
import premiere from "../assets/logos/premierepro.png";
import git from "../assets/logos/github.png";
import bit from "../assets/logos/bitbucket.png";
import vs from "../assets/logos/vscode.png";
import trello from "../assets/logos/trello.png";
import audit from "../assets/logos/audition.png";

export class ContactUs extends Component {
  render() {
    return (
      <>
        <h3 className="funnyFonts text-center text-white mt-3 mb-3">
          These Are My Skills
        </h3>
        <hr />
        <div className="container-fluid">
          <div className="row">
            {/* languages section */}
            <div className="col-md-2 border border-white">
              <h3 className="funnyFonts text-center text-white mt-3 mb-3">
                Languages
              </h3>
              <div className="row">
                <div className="col-md-5">
                  <div className=" text-center">Python</div>
                  <div className="">
                    <img
                      className="img-responsive logo"
                      src={python}
                      alt="python logo"
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="">
                    <div className=" text-center">Javascript</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={javascript}
                        alt="javascript logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* languages row2 */}
              <div className="row">
                <div className="col-md-5">
                  <div className="">
                    <div className=" text-center">HTML5</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={hyper}
                        alt="html5 logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="">
                    <div className=" text-center">CSS3</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={style}
                        alt="css3 logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Technologies section */}
            <div className="col-md-4 teclogos border border-white">
              <h3 className="funnyFonts text-center text-white mt-3 mb-3">
                Technologies
              </h3>
              <div className="row">
                <div className="col-md-3">
                  <div className="">
                    <div className=" text-center">Django</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={django}
                        alt="django logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="">
                    <div className=" text-center">Flask</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={flask}
                        alt="flask logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="">
                    <div className=" text-center">React</div>
                    <div className="">
                      <img
                        className="img-responsive logo bg-white"
                        src={fav}
                        alt="react logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="">
                    <div className=" text-center">Angular</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={angular}
                        alt="angular logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="">
                    <div className=" text-center">Bootstrap</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={boot}
                        alt="bootstrap logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="">
                    <div className=" text-center">Node</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={nodejs}
                        alt="nodejs logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="">
                    <div className=" text-center">Jquery</div>
                    <div className="">
                      <img
                        className="img-responsive logo bg-white"
                        src={jq}
                        alt="jquery logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="">
                    <div className=" text-center">Postgresql</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={postgress}
                        alt="postgresql logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Tools section */}
            <div className="col-md-6 border border-white">
              <h3 className="funnyFonts text-center text-white mt-3 mb-3">
                Tools
              </h3>
              <div className="row">
                <div className="col-md-2">
                  <div className="">
                    <div className=" text-center">Vscode</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={vs}
                        alt="vscode logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="">
                    <div className=" text-center">Git</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={git}
                        alt="github logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="">
                    <div className=" text-center">Bitbucket</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={bit}
                        alt="bitbucket logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="">
                    <div className=" text-center">Premierepro</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={premiere}
                        alt="premierepro logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="">
                    <div className=" text-center">Maya</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={maya}
                        alt="maya logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="">
                    <div className=" text-center">Figma</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={figma}
                        alt="postgresql logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div className="">
                    <div className=" text-center">Illustrator</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={illustrator}
                        alt="Illustrator logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="">
                    <div className=" text-center">Aftereffects</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={aftereffects}
                        alt="aftereffects logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="">
                    <div className=" text-center">Photoshop</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={photoshop}
                        alt="photoshop logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="">
                    <div className=" text-center">Trello</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={trello}
                        alt="trello logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="">
                    <div className=" text-center">Audition</div>
                    <div className="">
                      <img
                        className="img-responsive logo"
                        src={audit}
                        alt="audition logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-white">
            <h3 className="funnyFonts">And here are my special skills</h3>
            <ul>
              <li>Team player</li>
              <li>Learn New skills</li>
              <li>Problem solving</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUs;
