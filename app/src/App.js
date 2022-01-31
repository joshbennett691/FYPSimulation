import { height } from "@mui/system";
import "./App.css";
import Appbar from "./components/appbar/AppbarComponent";
import Card from "./components/card/CardComponent";
import Simulation from "./components/simulation/Simulation";
import Background from "./components/images/m_green_background.jpg";
import ShadowTest from "./components/TEST/ShadowTest";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundColor: "#bcf4de",
        height: "100vh",
      }}
    >
      <Appbar />
      <Card />
      <Simulation />
      {/* <ShadowTest /> */}
    </div>
  );
}

export default App;
