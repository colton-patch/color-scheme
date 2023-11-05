import { useState } from "react";
import "./index.css";

import Header from "./components/Header.jsx";
import Button from "./components/Button.jsx";
import ColorPicker from "./components/ColorPicker.jsx";
import List from "./components/List.jsx";
import Canvas from "./components/Canvas.jsx";

function App() {
  const [fiveColors, setFiveColors] = useState(
    startUpColors() || {
      1: JSON.parse(localStorage.getItem("currentColor"))[0],
      2: JSON.parse(localStorage.getItem("currentColor"))[1],
      3: JSON.parse(localStorage.getItem("currentColor"))[2],
      4: JSON.parse(localStorage.getItem("currentColor"))[3],
      5: JSON.parse(localStorage.getItem("currentColor"))[4],
    }
  );

  return (
    <main
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(${fiveColors[5][0]}, ${fiveColors[5][1]}, ${fiveColors[5][2]}), rgb(${fiveColors[3][0]}, ${fiveColors[3][1]}, ${fiveColors[3][2]}))`,
      }}
    >
      <Header fiveColors={fiveColors} />
      <Button request={request} fiveColors={fiveColors} />

      <div className="sectionParent">
        <section>
          <Canvas fiveColors={fiveColors} />
        </section>

        <section>
          <ColorPicker request={request} fiveColors={fiveColors} />
        </section>

        <section>
          <List fiveColors={fiveColors} setFiveColors={setFiveColors} />
        </section>
      </div>
      <p></p>
      <p></p>
    </main>
  );

  function request(givenColor) {
    let requestColor = givenColor === null ? "N" : givenColor;

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

        localStorage.setItem("currentColor", JSON.stringify(palette));

        setFiveColors({
          1: palette[0],
          2: palette[1],
          3: palette[2],
          4: palette[3],
          5: palette[4],
        });
      }
    };

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
  }

  function sortColors(palette) {
    for (let i = 0; i < palette.length; i++) {
      let j = i;
      while (j > 0 && max(palette[j]) > max(palette[j - 1])) {
        let temp = palette[j];
        palette[j] = palette[j - 1];
        palette[j - 1] = temp;
        j--;
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

  function startUpColors() {
    if (localStorage.getItem("currentColor")) {
      return null;
    } else {
      localStorage.setItem(
        "currentColor",
        JSON.stringify([[169, 136, 91], [149, 148, 66], [126, 146, 60], [134, 37, 19], [23, 28, 33]])
      );
      return true;
    }
  }
}

export default App;
