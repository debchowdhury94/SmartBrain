import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import "./App.css";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";
import { useState } from "react";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import supplyClarifiApiJSONRequest from "./ClarifiConfig";
import SignIn from "./components/SignIn/SignIn";
import React from "react";
import Register from "./components/Register/Register";

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [boxes, setBoxes] = useState([]);
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const calculateFaceLocation = (data) => {
    const regions = data.outputs[0].data.regions;
    console.log(regions);

    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    const boxes = regions.map((region) => {
      const clarifiBox = region.region_info.bounding_box;

      return {
        leftCol: clarifiBox.left_col * width,
        topRow: clarifiBox.top_row * height,
        rightCol: width - clarifiBox.right_col * width,
        bottomRow: height - clarifiBox.bottom_row * height,
      };
    });

    return boxes;
  };

  const displayFaceBox = (boxes) => {
    setBoxes(boxes);
  };

  const onInputChange = (event) => {
    const url = event.target.value;
    setInput(url);
  };

  const onSubmit = () => {
    setImageUrl(input);

    const pathArguments = supplyClarifiApiJSONRequest(input);

    fetch(pathArguments.DATA_URL, pathArguments.REQUEST_OPTIONS)
      .then((response) => response.json())
      .then((result) => displayFaceBox(calculateFaceLocation(result)))
      .catch((error) => console.log(error));
  };

  const onRouteChange = (route) => {
    
    setRoute(route);
  };

  return (
    <div className="App">
      <ParticlesBg
        className="particles"
        color="#FFFFFF"
        num={200}
        type="cobweb"
        bg={true}
      />
      <Navigation onRouteChange={onRouteChange} route={route} />
      {route === "home" ? (
        <React.Fragment>
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
          <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
        </React.Fragment>
      ) : route === "signin" ? (
        <SignIn onRouteChange={onRouteChange} />
      ) : (
        <Register onRouteChange={onRouteChange} />
      )}
    </div>
  );
}

export default App;
