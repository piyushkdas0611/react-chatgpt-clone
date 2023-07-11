import "./index.css";

function App() {
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
            <input type="text" placeholder="Send a message"/>
            <div id="submit">➢</div>
          </div>
          <p className="info">Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT May 24 Version</p>
        </div>
      </section>
    </div>
  );
}

export default App;
