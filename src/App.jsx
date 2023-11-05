import { useState } from "react";
import "./index.css";
import Header from "./components/Header.jsx";
import Buttons from "./components/Buttons.jsx";

function App() {
  const [fiveColors, setFiveColors] = useState({
    1: [120, 120, 120],
    2: [120, 120, 120],
    3: [120, 120, 120],
    4: [120, 120, 120],
    5: [120, 120, 120],
  });

  return (
    <body>
      <Header fiveColors={fiveColors} />
      <Buttons request={request} />
    </body>
  );

  function request(givenColor) {

    let requestColor = (givenColor === null) ? "N" : givenColor;

    var url = "http://colormind.io/api/";
    var data = {
      model: "default",
      input: ["N", "N", requestColor, "N", "N"],
    };

    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        var palette = JSON.parse(http.responseText).result;
        palette = sortColors(palette);
        setFiveColors({
          1: palette[0],
          2: palette[1],
          3: palette[2],
          4: palette[3],
          5: palette[4],
        });
        sortColors();
      }
    };

    http.open("POST", url, true);
    http.send(JSON.stringify(data));

  }

  function sortColors(palette) {
    for (let i=0; i<palette.length; i++) {
      let j = i;
      while (j > 0 && average(palette[j]) > average(palette[j-1])) {
        let temp = palette[j];
        palette[j] = palette[j-1];
        palette[j-1] = temp;
        j--
      }
    }
    
    return palette;
  }

  function average(colorVals) {
    let vals = 0;
    let total = 0;
    for (const val of colorVals) {
      total += val;
      vals++;
    }
    return total / vals;
  }
  
}

export default App;
