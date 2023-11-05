function List({fiveColors}) {

    let buttonStyle = {
        backgroundColor: `rgb(${fiveColors[1][0]}, ${fiveColors[1][1]}, ${fiveColors[1][2]})`,
        border: `2px solid rgb(${fiveColors[5][0]}, ${fiveColors[5][1]}, ${fiveColors[5][2]})`,
        color: `rgb(${fiveColors[5][0]}, ${fiveColors[5][1]}, ${fiveColors[5][2]})`
      }

    let addToFavorites = (colors, name) => {
        if (name == null || name == '') {
            name = "new palette"
        }
        const favoritesList = document.getElementById('favorites');
        var opt = document.createElement('option');
        opt.value = colors;
        opt.innerHTML = name;
        favoritesList.appendChild(opt);
    };

    return (
        <>
            <p>Favorites</p>

            <select name="favorites" id="favorites" multiple></select>
            <div>
            <button style={buttonStyle} onClick={() => addToFavorites(fiveColors, document.getElementById('favoriteName').value)}>Add to favorites</button>
            </div>
            <label for='favoriteName'>New palette name</label>
            <input type='text'id='favoriteName'></input>
        </>
    );
}

export default List;