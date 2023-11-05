function Buttons({ request }) {
  return (
    <>
      <button onClick={() => request(null)}>Generate random color palette</button>
    </>
  );
}

export default Buttons;