import arrows from '../img/arrows.svg';

function Buttons({ request, fiveColors }) {
let buttonStyle = {
  backgroundColor: `rgb(${fiveColors[1][0]}, ${fiveColors[1][1]}, ${fiveColors[1][2]})`,
  border: `2px solid rgb(${fiveColors[5][0]}, ${fiveColors[5][1]}, ${fiveColors[5][2]})`,
  color: `rgb(${fiveColors[5][0]}, ${fiveColors[5][1]}, ${fiveColors[5][2]})`
}

  return (
    <>
      <button onClick={() => request(null)} style = {buttonStyle}><img src={arrows} />Random palette</button>
    </>
  );
}

export default Buttons;