import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Licence from './Licence'
import instagram from "../assets/projects/insta.png"
import servertrackerhome from "../assets/projects/servert.png"
import mygallery from "../assets/projects/mygallery.png"
import quotes from "../assets/projects/quotes.png"
import news from "../assets/projects/news.png"
import whisperbloghomepage from "../assets/projects/whisperb.png"
const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <h6 className="funnyFonts text-center">Projects I have worked on:</h6>
        <MDBRow>
          <MDBCol md="2">
          <div className="projsmalldiv">
          <img className="img-responsive projsmall mt-2" src={servertrackerhome} alt='project1' />
          </div>
          </MDBCol>
          <MDBCol md="2">
          <img className="img-responsive projsmall mt-2" src={instagram} alt='' />
           </MDBCol>
           <MDBCol md="2">
           <img className="img-responsive projsmall mt-2" src={news} alt='' />
           </MDBCol>
           <MDBCol md="2">
           <img className="img-responsive projsmall mt-2" src={quotes} alt='' />
           </MDBCol>
           <MDBCol md="2">
           <img className="img-responsive projsmall mt-2" src={whisperbloghomepage} alt='' />
           </MDBCol>
           <MDBCol md="2">
           <img className="img-responsive projsmall mt-2" src={mygallery} alt='' />
           </MDBCol>
         
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/licence"> Paul Wamaria </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
