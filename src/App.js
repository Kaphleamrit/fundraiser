import { Button, Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container
        style={{
          height: "100vh",
          background: "black",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Button variant="success">Donate</Button>
      </Container>
    </div>
  );
}

export default App;
