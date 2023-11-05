function Buttons({ request, fiveColors }) {
let buttonStyle = {
  backgroundColor: `rgb(0,0,0)`,
  border: `2px solid rgb(${fiveColors[4][0]}, ${fiveColors[4][1]}, ${fiveColors[4][2]}`,
  color: `rgb(${fiveColors[1][0]}, ${fiveColors[1][1]}, ${fiveColors[1][2]})`
}

  return (
    <>
      <button onClick={() => request(null)} style = {buttonStyle}>Random palette</button>
    </>
  );
}

export default Buttons;