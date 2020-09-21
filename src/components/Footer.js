import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          <a href="https://servertracker.herokuapp.com">
          <img className="img-responsive projsmall mt-2" src={servertrackerhome} alt='project1' />
          </a>
          </div>
          </MDBCol>
          <MDBCol md="2">
        <a href="https://instagram-clone01.herokuapp.com/register/">
        <img className="img-responsive projsmall mt-2" src={instagram} alt='' />
        </a>
           </MDBCol>
           <MDBCol md="2">
             <a href="https://news-201.herokuapp.com/">
             <img className="img-responsive projsmall mt-2" src={news} alt='' />
             </a>
         
           </MDBCol>
           <MDBCol md="2">
             <a href="https://paulwamaria.github.io/Quotes/">
             <img className="img-responsive projsmall mt-2" src={quotes} alt='' />
             </a>
         
           </MDBCol>
           <MDBCol md="2">
             <a href="https://whisperblogo1.herokuapp.com/">
             <img className="img-responsive projsmall mt-2" src={whisperbloghomepage} alt='' />
             </a>
        
           </MDBCol>
           <MDBCol md="2">
  <a href="https://mgallery01.herokuapp.com/">
  <img className="img-responsive projsmall mt-2" src={mygallery} alt='' />
  </a>
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
