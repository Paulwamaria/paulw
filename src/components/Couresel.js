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
import insta from "../assets/projects/insta.png";
import gallery from "../assets/projects/mygallery.png";
import news from "../assets/projects/news.png";
import whisper from "../assets/projects/whisperb.png";
import quotes from "../assets/projects/quotes.png";
import projw from "../assets/projects/projw.png";

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
                <img className="d-block w-100" src={insta} alt="Third slide" />
                <MDBMask overlay="black-slight" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Instagram clone</h3>
                <a className="mx-auto mt-2" href="#insta">
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
                  src={whisper}
                  alt="Fourth slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Whisper Blog</h3>
                <a className="mx-auto mt-2" href="#blog">
                  {" "}
                  <button className="btn-info mx-auto">view Details</button>
                </a>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="7">
              <MDBView>
                <img className="d-block w-100" src={projw} alt="Fourth slide" />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Projwards</h3>
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
                      alt="servertracker homepage image"
                    />
                  </a>
                </div>

                <div className="col-sm-6">
                  <h5 className="text-center funnyFonts">
                    About servertracker
                  </h5>
                  <p>
                    This is a web application that assists a supervisor to
                    monitor the number of virtual servers runing on their platform.
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
              id="insta"
            >
              <a
                href="https://instagram-clone01.herokuapp.com/register/"
                className=" text-white pjLink"
              >
                {" "}
                Instagram
              </a>
            </div>
            <div className="">
              <div className="row">
                <div className="col-sm-6">
                  <a href="https://instagram-clone01.herokuapp.com/register/">
                    {" "}
                    <img
                      src={insta}
                      className="img-responsive projimg"
                      alt="instagram homepage image"
                    />
                  </a>
                </div>

                <div className="col-sm-6">
                  <h5 className="text-center funnyFonts">About Instagram</h5>
                  <p>A replica of the famous Instagram app</p>
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
                    href="https://instagram-clone01.herokuapp.com/register/"
                    class="nav-link waves-effect waves-light bg-white pjLink"
                  >
                    <i class="fa fa-link ">Live</i>
                  </a>
                  <a
                    href="https://github.com/Paulwamaria/instagram"
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
                      alt="mygallery homepage image"
                    />
                  </a>
                </div>

                <div className="col-sm-6">
                  <h5 className="text-center funnyFonts">About Mygallery</h5>
                  <p>
                    A web app that acts as my gallery where I can post my photos
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
                      alt="quotes homepage image"
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
                    <li>Python</li>
                    <li>Django</li>
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
                      alt="news homepage image"
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
        {/* blog */}
        <div className="col-md-4 cardprojectContaner mt-5">
          <div className=" cardProject ovlerflow-hidden lighten-2 opacity-5">
            <div
              className=" card-header funnyFonts text-white text-center"
              id="blog"
            >
              <a
                href="https://whisperblogo1.herokuapp.com/"
                className=" text-white pjLink"
              >
                {" "}
                Whisperblog
              </a>
            </div>
            <div className="">
              <div className="row">
                <div className="col-sm-6">
                  <a href="https://whisperblogo1.herokuapp.com/">
                    {" "}
                    <img
                      src={whisper}
                      className="img-responsive projimg"
                      alt="blog homepage image"
                    />
                  </a>
                </div>

                <div className="col-sm-6">
                  <h5 className="text-center funnyFonts">About Whisperblog</h5>
                  <p>A blog where users can post mental health-related stuff</p>
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
                    href="https://whisperblogo1.herokuapp.com/"
                    class="nav-link waves-effect waves-light bg-white pjLink"
                  >
                    <i class="fa fa-link ">Live</i>
                  </a>
                  <a
                    href="https://github.com/Paulwamaria/whisper-blog"
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
