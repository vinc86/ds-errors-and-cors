import React, { useState } from 'react';


function App() {
  const [message, setMessage] = useState("")
  const fetchPostRoute =()=>{
    fetch("http://localhost:5000/postme")
    .then(res =>res.json())
    .then(res => setMessage(res))
    
  }
  return (
    <div className="App">
      <h1>CORS Test</h1>
      <button onClick={()=>fetchPostRoute()}>Click Me</button>
      {message && <p>{message.message} Fetched</p>}
    </div>
  );
}

export default App;
