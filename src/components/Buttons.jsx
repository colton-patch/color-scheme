function Buttons({ request }) {
  return (
    <>
      <button onClick={() => request()}>Generate random color palette</button>
      <button></button>
    </>
  );
}

export default Buttons;