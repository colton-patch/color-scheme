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
        backgroundImage: `linear-gradient(to bottom, ${fiveColors[5]}, ${fiveColors[3]})`,
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
    </main>
  );


  /*
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
  }*/


  
function request(givenColor) {
    const seedRGBColor = (givenColor) ? `rgb(${givenColor[0]},${givenColor[1]},${givenColor[2]})` : generateRandomRGBColor();

    const url = `https://www.thecolorapi.com/scheme?rgb=${seedRGBColor}&mode=triad&count=5`;


  /*
  different themes for mode in url

  monochrome: Generates a monochromatic color scheme based on the seed color.

  monochrome-dark: Generates a monochromatic color scheme with darker shades.

  monochrome-light: Generates a monochromatic color scheme with lighter shades.

  analogic: Generates an analogous color scheme based on the seed color.

  complement: Generates a color scheme with complementary colors.

  analogic-complement: Combines an analogous and a complementary color scheme.

  triad: Generates a triadic color scheme.

  quad: Generates a tetradic (four-color) color scheme.
  */  



    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const colors = data.colors.map((color) => color.rgb.value);
        console.log(colors);

        localStorage.setItem("currentColor", JSON.stringify(colors));

        setFiveColors({
          1: colors[5],
          2: colors[4],
          3: colors[3],
          4: colors[2],
          5: colors[1],
        });
      })
      .catch((error) => console.error("Error fetching color scheme:", error));
  }

  function getRandomRGBValue() {
    return Math.floor(Math.random() * 256);
  }
  
  function generateRandomRGBColor() {
    const red = getRandomRGBValue();
    const green = getRandomRGBValue();
    const blue = getRandomRGBValue();
    return `rgb(${red},${green},${blue})`;
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
        JSON.stringify(['rgb(216, 212, 183)', 'rgb(185, 17, 17)', 'rgb(70, 128, 95)', 'rgb(83, 88, 69)', 'rgb(12, 18, 16)'])
      );
      return true;
    }
  }
}

export default App;
