function Header({ fiveColors }) {
  console.log(fiveColors);

  let color1 = {
    backgroundColor: `rgb(${fiveColors[1][0]}, ${fiveColors[1][1]}, ${fiveColors[1][2]}`,
  };

  let color2 = {
    backgroundColor: `rgb(${fiveColors[2][0]}, ${fiveColors[2][1]}, ${fiveColors[2][2]}`,
  };

  let color3 = {
    backgroundColor: `rgb(${fiveColors[3][0]}, ${fiveColors[3][1]}, ${fiveColors[3][2]}`,
  };

  let color4 = {
    backgroundColor: `rgb(${fiveColors[4][0]}, ${fiveColors[4][1]}, ${fiveColors[4][2]}`,
  };

  let color5 = {
    backgroundColor: `rgb(${fiveColors[5][0]}, ${fiveColors[5][1]}, ${fiveColors[5][2]}`,
  };

  return (
    <header>
      <h1>Color Scheme for Artists</h1>
      <h2>Generate a color palette</h2>

      <div className="colorRow">
        <div className="color" style={color1} />

        <div className="color" style={color2} />

        <div className="color" style={color3} />

        <div className="color" style={color4} />

        <div className="color" style={color5} />
      </div>
    </header>
  );
}

export default Header;
