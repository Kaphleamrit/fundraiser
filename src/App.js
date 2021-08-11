import { Button, Carousel } from "react-bootstrap";
import Navbar from "./components/Navbar";
// import Lorem, { LoremIpsum } from "react-lorem-ipsum";
import Img1 from "./assets/hungryChild.jpg";
import Img2 from "./assets/hungryChild2.webp";
import Img3 from "./assets/hugryChild3.jpg";
import Img4 from "./assets/hungryChild4.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
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
      <Button size="lg" className="donateBtn" variant="success">
        Donate
      </Button>
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "150px",
          color: "white",
          flexDirection: "column"
        }}
      >
        <span>&copy;copyright</span>
        <span>Amrit Kaphle</span>
      </footer>
    </div>
  );
}

export default App;
// Lorem ipsum odor amet, consectetuer adipiscing elit. Augue bibendum senectus felis varius curabitur. Montes ipsum dictumst orci volutpat quisque etiam torquent integer. Senectus proin et nisi aliquam scelerisque ultricies faucibus finibus. Vehicula neque gravida luctus iaculis fringilla. Tincidunt aptent nascetur nunc sed parturient class tristique. Cras pulvinar laoreet phasellus eros pellentesque aliquam vel dapibus. Penatibus vehicula gravida per dignissim quis quisque luctus. Semper dapibus ut efficitur; sollicitudin ligula est nascetur magnis pharetra. Dapibus id maximus metus lobortis nascetur iaculis duis.
