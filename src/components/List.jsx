import { useState } from "react";

function List({ fiveColors, setFiveColors }) {
  const [favoritesList, setFavoritesList] = useState(
    JSON.parse(localStorage.getItem("colorOptions")) || []
  );

  let textColor2 = {
    color: `rgb(${fiveColors[5][0]}, ${fiveColors[5][1]}, ${fiveColors[5][2]}`,
  };

  let buttonStyle = {
    backgroundColor: `rgb(${fiveColors[1][0]}, ${fiveColors[1][1]}, ${fiveColors[1][2]})`,
    border: `2px solid rgb(${fiveColors[5][0]}, ${fiveColors[5][1]}, ${fiveColors[5][2]})`,
    color: `rgb(${fiveColors[5][0]}, ${fiveColors[5][1]}, ${fiveColors[5][2]})`,
  };

  function addToFavorites(colors, name) {
    if (name == null || name == "") {
      name = "new palette";
    }

    const newFavorite = {
      name: name,
      colors: colors,
    };

    let newFavoritesList = favoritesList.slice();
    newFavoritesList.push(newFavorite);
    setFavoritesList(newFavoritesList);

    localStorage.setItem("colorOptions", JSON.stringify(newFavoritesList));
  };

  function removeFromFavorites(name) {
    console.log(name);
    const removeList = favoritesList.filter(object => object.name !== name);
    setFavoritesList(removeList);
  }

  return (
    <>
      <p style={textColor2}>Favorites</p>

      <select name="favorites" id="favorites" multiple>
        {favoritesList.map((object, index) => (
          <option
            value={object.colors}
            key={index}
            onClick={() => {
              setFiveColors(object.colors);
              localStorage.setItem(
                "currentColor",
                JSON.stringify([
                  object.colors[1],
                  object.colors[2],
                  object.colors[3],
                  object.colors[4],
                  object.colors[5],
                ])
              );
            }}
          >
            {object.name}
          </option>
        ))}
      </select>
      <div className="centerParent">
        <div>
          <button
            style={buttonStyle}
            onClick={() =>
              addToFavorites(
                fiveColors,
                document.getElementById("favoriteName").value
              )
            }
          >
            Add to favorites
          </button>
        </div>
        <label style={textColor2} className="helvet" htmlFor="favoriteName">
          New palette name
        </label>
        <input type="text" id="favoriteName"></input>




        <label style={textColor2} className="helvet" htmlFor="removeName">
          Remove existing palette
        </label>
        <input type="text" id="removeName"></input>
        <button style={buttonStyle} onClick={() => removeFromFavorites(document.getElementById('removeName').value)}>Remove from favorites</button>
      </div>
    </>
  );
}

export default List;
