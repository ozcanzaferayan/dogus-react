const App = () => {
  const name = "Zafer";

  function merhaba() {
    alert("Merhaba");
  }

  return (
    <div>
      <h1>Merhaba {name}</h1>
      <button onClick={merhaba}>Tıkla</button>
    </div>
  );
};

export default App;
