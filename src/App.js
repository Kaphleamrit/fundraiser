import {  Carousel } from "react-bootstrap";
import Navbar from "./components/Navbar";
// import Lorem, { LoremIpsum } from "react-lorem-ipsum";
import Img1 from "./assets/hungryChild.jpg";
import Img2 from "./assets/hungryChild2.webp";
import Img3 from "./assets/hugryChild3.jpg";
import Img4 from "./assets/hungryChild4.jpg";
import "./App.css";
import About from "./components/About";
import Donate from "./components/Donate";

function App() {
  return (
    <div id = "home" className="App">
      <Navbar />

      <Carousel
        style={{
          marginTop: "6rem",
        }}
      >
        <Carousel.Item>
          <img className="carouselImg" src={Img1} alt="hungry child" />
          <Carousel.Caption>
            <h3>Lorem ipsum odor amet, consectetuer</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="carouselImg" src={Img2} alt="hungry child" />
          <Carousel.Caption>
            <h3>Lorem ipsum odor amet, consectetuer</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImg" src={Img3} alt="hungry child" />
          <Carousel.Caption>
            <h3>Lorem ipsum odor amet, consectetuer</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImg" src={Img4} alt="hungry child" />
          <Carousel.Caption>
            <h3>Lorem ipsum odor amet, consectetuer</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     
<div id = "donate"
style = {{
  display: 'flex',
  flexDirection: 'column',
  alignItems : 'center'
}}><Donate  />
<About />
</div>
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10  0px",
          color: "white",
          flexDirection: "column",
        }}
      >
        <span>&copy;copyright</span>
        <span>Amrit Kaphle</span>
      </footer>
    </div>
  );
}

export default App;
