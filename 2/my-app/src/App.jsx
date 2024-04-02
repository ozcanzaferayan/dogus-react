import React, { useState } from "react";

const App = () => {
  const [sayi, setSayi] = useState(0);

  function arttir() {
    setSayi(sayi + 1);
  }

  return (
    <div>
      <h1>{sayi}</h1>
      <button onClick={arttir}>Arttır</button>
    </div>
  );
};

export default App;
