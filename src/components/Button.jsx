import arrows from '../img/arrows.svg';

function Button({ request, fiveColors }) {
let buttonStyle = {
  backgroundColor: `${fiveColors[1]}`,
  border: `2px solid ${fiveColors[5]}`,
  color: `${fiveColors[5]}`
}

  return (
    <div className='centerParent'>
      <button className='centered' onClick={() => request(null)} style = {buttonStyle}><img src={arrows} />&nbsp;Random Palette</button>
    </div>
  );
}

export default Button;