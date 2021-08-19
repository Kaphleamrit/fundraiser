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
      <form>
        <Button type="submit" size="lg" className="donateBtn" variant="success">
          <a
            style={{
              textDecoration: "none",
              color: "white"
            }}
            
            href="https://pages.razorpay.com/pl_Hn80ONKFkRF7y9/view"
          >
            Donate
          </a>
        </Button>
        <script
          src="https://checkout.razorpay.com/v1/payment-button.js"
          data-payment_button_id="pl_Hn8TeBJP6MtUyn"
          async
        >
          {" "}
        </script>
      </form>

      <footer
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "150px",
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
