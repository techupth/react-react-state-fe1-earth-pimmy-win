import React, { useState } from 'react';
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");

  const handleButtonClick = (newGreeting) => {
    setGreeting(newGreeting);
  };
    
  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => handleButtonClick("Hi!")}>Hi!</button>
        <button onClick={() => handleButtonClick("你好!")}>你好!</button>        

      </div>
    </div>
  );
}

export default App;
