import { useState } from "react";
import "./index.css";
import Header from "./components/Header.jsx";
import Buttons from "./components/Buttons.jsx";

function App() {
  const [fiveColors, setFiveColors] = useState({
    color1: [120, 120, 120],
    color2: [120, 120, 120],
    color3: [120, 120, 120],
    color4: [120, 120, 120],
    color5: [120, 120, 120],
  });

  return (
    <>
      <Header fiveColors={fiveColors} />
      <Buttons request={request} />
    </>
  );

  function request(givenColor) {

    let requestColor = (givenColor === null) ? "N" : givenColor;

    var url = "http://colormind.io/api/";
    var data = {
      model: "ui",
      input: ["N", "N", requestColor, "N", "N"],
    };

    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        var palette = JSON.parse(http.responseText).result;
        setFiveColors({
          color1: palette[0],
          color2: palette[1],
          color3: palette[2],
          color4: palette[3],
          color5: palette[4],
        });
        console.log(fiveColors);
      }
    };

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
  }
}

export default App;
