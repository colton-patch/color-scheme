function Header({fiveColors}) {

  let color1 = {
    backgroundColor: `rgb(${fiveColors.color1[0]}, ${fiveColors.color1[1]}, ${fiveColors.color1[2]}`,
    width: '4rem'
  }

  let color2 = {
    backgroundColor: `rgb(${fiveColors.color2[0]}, ${fiveColors.color2[1]}, ${fiveColors.color2[2]}`,
    width: '4rem'
  }

  let color3 = {
    backgroundColor: `rgb(${fiveColors.color3[0]}, ${fiveColors.color3[1]}, ${fiveColors.color3[2]}`,
    width: '4rem'
  }

  let color4 = {
    backgroundColor: `rgb(${fiveColors.color4[0]}, ${fiveColors.color4[1]}, ${fiveColors.color4[2]}`,
    width: '4rem'
  }

  let color5 = {
    backgroundColor: `rgb(${fiveColors.color5[0]}, ${fiveColors.color5[1]}, ${fiveColors.color5[2]}`,
    width: '4rem'
  }

  return (
    <>
      <h1>Color Scheme for Artists</h1>
      <h2>Generate a color palette</h2>

      <div className="colorRow">

        <div className="color" style = {color1} />

        <div className="color" style = {color2}/>

        <div className="color" style = {color3}/>

        <div className="color" style = {color4}/>

        <div className="color" style = {color5}/>

      </div>
    </>
  );
}

export default Header;
