import { useState } from "react";
import "./index.css";
import Header from "./components/Header.jsx";
import Buttons from "./components/Buttons.jsx";

function App() {
  const [fiveColors, setFiveColors] = useState({
    1: [ 169, 136, 91 ],
    2: [ 149, 148, 66 ],
    3: [ 126, 146, 60 ],
    4: [ 134, 37, 19 ],
    5:[ 23, 28, 33 ]
  });

  return (
    <main style = {{
      backgroundImage: `linear-gradient(to bottom, rgb(${fiveColors[5][0]}, ${fiveColors[5][1]}, ${fiveColors[5][2]}), rgb(${fiveColors[3][0]}, ${fiveColors[3][1]}, ${fiveColors[3][2]}))`,
    }}
    >
      <Header fiveColors={fiveColors} />
      <Buttons request={request} />
    </main>
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
        console.log(fiveColors);
      }
    };

    http.open("POST", url, true);
    http.send(JSON.stringify(data));

  }

  function sortColors(palette) {
    for (let i=0; i<palette.length; i++) {
      let j = i;
      while (j > 0 && max(palette[j]) > max(palette[j-1])) {
        let temp = palette[j];
        palette[j] = palette[j-1];
        palette[j-1] = temp;
        j--
      }
    }
    
    return palette;
  }

  function max(colorVals) {
    let max = colorVals[0];
    for (const val of colorVals) {
      if (val > max) {
        max = val;
      }
    }
    return max;
  }
  
}

export default App;
