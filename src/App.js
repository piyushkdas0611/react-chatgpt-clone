import { useState } from "react";
import "./index.css";

function App() {
  const [value, setValue] = useState(null)
  const [ message, setMessage] = useState(null)
  const getMessages = async () => {
    const options = {
      method: "POST",
      body : JSON.stringify({
        message: value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
      console.log(data)
      setMessage(data.choices[0].message)
    } catch(error) {
      console.log(error)
    }
  }
  console.log(message)

  return (
    <div className="App">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>Hello</li>
        </ul>
        <nav>
          <p>Made By Piyush</p>
        </nav>
      </section>
      <section className="main">
        <h1>CloneGPT</h1>
        <ul className="feed">
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input type="text" placeholder="Send a message" value={value} onChange={(e) => setValue(e.target.value)}/>
            <div id="submit" onClick={getMessages}>➢</div>
          </div>
          <p className="info">Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT May 24 Version</p>
        </div>
      </section>
    </div>
  );
}

export default App;
