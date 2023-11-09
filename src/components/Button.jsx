import arrows from "../img/arrows.svg";

function Button({ request, fiveColors }) {
  let buttonStyle = {
    backgroundColor: `${fiveColors[1]}`,
    border: `2px solid ${fiveColors[5]}`,
    color: `${fiveColors[5]}`,
  };

  return (
    <div className="centerParent">
      <button
        className="centered"
        onClick={() => request(null)}
        style={buttonStyle}
      >
        <img src={arrows} />
        &nbsp;Random Palette
      </button>
      <select id="fruit" name="fruit">
        <option value="monochrome">Monochrome</option>
        <option value="monochrome-dark">Monochrome-Dark</option>
        <option value="monochrome-light">Monochrome-Light</option>
        <option value="analogic">Analogic</option>
        <option value="complement">Complement</option>
        <option value="analogic-complement">Analogic-Complement</option>
        <option value="triad">Triad</option>
        <option value="quad">Quad</option>
      </select>
    </div>
  );
}

export default Button;
