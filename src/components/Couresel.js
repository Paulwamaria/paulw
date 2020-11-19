import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";
import servertracker from "../assets/projects/servert.png";
import smartfarm from "../assets/projects/smartfarm.png";
import gallery from "../assets/projects/mygallery.png";
import news from "../assets/projects/news.png";
import quotes from "../assets/projects/quotes.png";
import alx from "../assets/projects/alx.png";

const CarouselPage = () => {
  return (
    <>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={7}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={servertracker}
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive ">Servertracker</h3>
                <a className="mx-auto mt-2" href="#servert">
                  {" "}
                  <button className="btn-info mx-auto">view Details</button>
                </a>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={quotes}
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">quotes</h3>
                <a className="mx-auto mt-2" href="#quotes">
                  {" "}
                  <button className="btn-info mx-auto">view Details</button>
                </a>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img className="d-block w-100" src={alx} alt="Third slide" />
                <MDBMask overlay="black-slight" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Alx-accessor</h3>
                <a className="mx-auto mt-2" href="#alx">
                  {" "}
                  <button className="btn-info mx-auto">view Details</button>
                </a>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <MDBView>
                <img className="d-block w-100" src={news} alt="Fourth slide" />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">News</h3>
                <a className="mx-auto mt-2" href="#news">
                  {" "}
                  <button className="btn-info mx-auto">view skills</button>
                </a>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="5">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={gallery}
                  alt="Fourth slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">My gallery</h3>
                <a className="mx-auto mt-2" href="#gallery">
                  {" "}
                  <button className="btn-info mx-auto">view Details</button>
                </a>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="6">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={smartfarm}
                  alt="Fourth slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Smartfarm</h3>
                <a className="mx-auto mt-2" href="#smartfarm">
                  {" "}
                  <button className="btn-info mx-auto">view Details</button>
                </a>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
      {/* First container1 */}
      <div className="container-fluid">
        <div className="row">
          {/* servertracker */}
          <div className="col-md-4 cardprojectContaner mt-5">
            <div className=" cardProject ovlerflow-hidden lighten-2 opacity-5">
              <div
                className=" card-header funnyFonts text-white text-center"
                id="servert"
              >
                <a
                  href="https://servertracker.herokuapp.com"
                  className=" text-white pjLink"
                >
                  {" "}
                  Servertracker
                </a>
              </div>
              <div className="">
                <div className="row">
                  <div className="col-sm-6">
                    <a href="https://servertracker.herokuapp.com">
                      {" "}
                      <img
                        src={servertracker}
                        className="img-responsive projimg"
                        alt="servertrackerimage"
                      />
                    </a>
                  </div>

                  <div className="col-sm-6">
                    <h5 className="text-center funnyFonts">
                      About servertracker
                    </h5>
                    <p>
                      This is a web application that assists a supervisor to
                      monitor the number of virtual servers runing on their
                      platform.
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-6">
                    <h6 className="funnyFonts text-center">Technology Used</h6>
                    <ul>
                      <li>Python</li>
                      <li>Django</li>
                      <li>React</li>
                      <li>Html</li>
                      <li>Css</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="funnyFonts">Links</h6>
                    <a
                      href="https://servertracker.herokuapp.com"
                      class="nav-link waves-effect waves-light bg-white pjLink"
                    >
                      <i class="fa fa-link ">Live</i>
                    </a>
                    <a
                      href="https://bitbucket.org/Paulwamaria/server_tracker/src/master/"
                      class="nav-link waves-effect waves-light bg-white ml-1 pjLink"
                    >
                      <i class="fab fa-bitbucket ">Bitbucket</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* instagram */}
          <div className="col-md-4 cardprojectContaner mt-5">
            <div className=" cardProject ovlerflow-hidden lighten-2 opacity-5">
              <div
                className=" card-header funnyFonts text-white text-center"
                id="alx"
              >
                <a
                  href="https://alx-accessor.netlify.app"
                  className=" text-white pjLink"
                >
                  {" "}
                  Alx-accessor
                </a>
              </div>
              <div className="">
                <div className="row">
                  <div className="col-sm-6">
                    <a href="https://alx-accessor.netlify.app">
                      {" "}
                      <img
                        src={alx}
                        className="img-responsive projimg"
                        alt="alxHome"
                      />
                    </a>
                  </div>

                  <div className="col-sm-6">
                    <h5 className="text-center funnyFonts">
                      About Alx-accessor
                    </h5>
                    <p>
                      Alx-accessor is a simple information management system
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-6">
                    <h6 className="funnyFonts text-center">Technology Used</h6>
                    <ul>
                      <li>Python</li>
                      <li>Django</li>
                      <li>React</li>
                      <li>Html</li>
                      <li>Css</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="funnyFonts">Links</h6>
                    <a
                      href="https://alx-accessor.netlify.app"
                      class="nav-link waves-effect waves-light bg-white pjLink"
                    >
                      <i class="fa fa-link ">Live</i>
                    </a>
                    <a
                      href="https://github.com/Paulwamaria/alxlaunchpadaccessfront"
                      class="nav-link waves-effect waves-light bg-white ml-1 pjLink"
                    >
                      <i class="fab fa-github ">Github</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* gallery */}
          <div className="col-md-4 cardprojectContaner mt-5">
            <div className=" cardProject ovlerflow-hidden lighten-2 opacity-5">
              <div
                className=" card-header funnyFonts text-white text-center"
                id="gallery"
              >
                <a
                  href="https://mgallery01.herokuapp.com/"
                  className=" text-white pjLink"
                >
                  {" "}
                  Mygallery
                </a>
              </div>
              <div className="">
                <div className="row">
                  <div className="col-sm-6">
                    <a href="https://mgallery01.herokuapp.com/">
                      {" "}
                      <img
                        src={gallery}
                        className="img-responsive projimg"
                        alt="mygalleryHomePage"
                      />
                    </a>
                  </div>

                  <div className="col-sm-6">
                    <h5 className="text-center funnyFonts">About Mygallery</h5>
                    <p>
                      A web app that acts as my gallery where I can post my
                      photos
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-6">
                    <h6 className="funnyFonts text-center">Technology Used</h6>
                    <ul>
                      <li>Python</li>
                      <li>Django</li>
                      <li>Html</li>
                      <li>Css</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="funnyFonts">Links</h6>
                    <a
                      href="https://mgallery01.herokuapp.com/"
                      class="nav-link waves-effect waves-light bg-white pjLink"
                    >
                      <i class="fa fa-link ">Live</i>
                    </a>
                    <a
                      href="https://github.com/Paulwamaria/my-gallery"
                      class="nav-link waves-effect waves-light bg-white ml-1 pjLink"
                    >
                      <i class="fab fa-github ">Github</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* projects container2 */}
      <div className="container-fluid">
        <div className="row">
          {/* Quotes */}
          <div className="col-md-4 cardprojectContaner mt-5">
            <div className=" cardProject ovlerflow-hidden lighten-2 opacity-5">
              <div
                className=" card-header funnyFonts text-white text-center"
                id="quotes"
              >
                <a
                  href="https://paulwamaria.github.io/Quotes/"
                  className=" text-white pjLink"
                >
                  {" "}
                  Quotes
                </a>
              </div>
              <div className="">
                <div className="row">
                  <div className="col-sm-6">
                    <a href="https://paulwamaria.github.io/Quotes/">
                      {" "}
                      <img
                        src={quotes}
                        className="img-responsive projimg"
                        alt="quotesHomePage"
                      />
                    </a>
                  </div>

                  <div className="col-sm-6">
                    <h5 className="text-center funnyFonts">About Quotes</h5>
                    <p>
                      web application that allows users to create, post, upvote,
                      and downvote quotes
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-6">
                    <h6 className="funnyFonts text-center">Technology Used</h6>
                    <ul>
                      <li>Angular</li>
                      <li>Html</li>
                      <li>Css</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="funnyFonts">Links</h6>
                    <a
                      href="https://paulwamaria.github.io/Quotes/"
                      class="nav-link waves-effect waves-light bg-white pjLink"
                    >
                      <i class="fa fa-link ">Live</i>
                    </a>
                    <a
                      href="https://github.com/Paulwamaria/Quotes"
                      class="nav-link waves-effect waves-light bg-white ml-1 pjLink"
                    >
                      <i class="fab fa-github ">Github</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* News */}
          <div className="col-md-4 cardprojectContaner mt-5">
            <div className=" cardProject ovlerflow-hidden lighten-2 opacity-5">
              <div
                className=" card-header funnyFonts text-white text-center"
                id="news"
              >
                <a
                  href="https://news-201.herokuapp.com/"
                  className=" text-white pjLink"
                >
                  {" "}
                  World News
                </a>
              </div>
              <div className="">
                <div className="row">
                  <div className="col-sm-6">
                    <a href="https://news-201.herokuapp.com/">
                      {" "}
                      <img
                        src={news}
                        className="img-responsive projimg"
                        alt="newsHomePage"
                      />
                    </a>
                  </div>

                  <div className="col-sm-6">
                    <h5 className="text-center funnyFonts">About World News</h5>
                    <p>A web application that displays the world top news</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-6">
                    <h6 className="funnyFonts text-center">Technology Used</h6>
                    <ul>
                      <li>Python</li>
                      <li>Flask</li>
                      <li>Html</li>
                      <li>Css</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="funnyFonts">Links</h6>
                    <a
                      href="https://news-201.herokuapp.com/"
                      class="nav-link waves-effect waves-light bg-white pjLink"
                    >
                      <i class="fa fa-link ">Live</i>
                    </a>
                    <a
                      href="https://github.com/Paulwamaria/news-v2"
                      class="nav-link waves-effect waves-light bg-white ml-1 pjLink"
                    >
                      <i class="fab fa-github ">Github</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* smartfarm */}
          <div className="col-md-4 cardprojectContaner mt-5">
            <div className=" cardProject ovlerflow-hidden lighten-2 opacity-5">
              <div
                className=" card-header funnyFonts text-white text-center"
                id="smartfarm"
              >
                <a
                  href="https://smartfarm01.netlify.app"
                  className=" text-white pjLink"
                >
                  {" "}
                  Smartfarm
                </a>
              </div>
              <div className="">
                <div className="row">
                  <div className="col-sm-6">
                    <a href="https://smartfarm01.netlify.app">
                      {" "}
                      <img
                        src={smartfarm}
                        className="img-responsive projimg"
                        alt="smartfarmHome"
                      />
                    </a>
                  </div>

                  <div className="col-sm-6">
                    <h5 className="text-center funnyFonts">About Smartfarm</h5>
                    <p>A web application that acts as a platform for farmers to share their journey experience</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-6">
                    <h6 className="funnyFonts text-center">Technology Used</h6>
                    <ul>
                      <li>Python</li>
                      <li>Django</li>
                      <li>React</li>
                      <li>Html</li>
                      <li>Css</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="funnyFonts">Links</h6>
                    <a
                      href="https://smartfarm01.netlify.app"
                      class="nav-link waves-effect waves-light bg-white pjLink"
                    >
                      <i class="fa fa-link ">Live</i>
                    </a>
                    <a
                      href="https://github.com/BuildForSDGCohort2/Team-212-groupa-frontendreact"
                      class="nav-link waves-effect waves-light bg-white ml-1 pjLink"
                    >
                      <i class="fab fa-github ">Github</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselPage;
