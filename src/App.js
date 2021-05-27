import React, { Component } from "react"
import icone from "./icone.jpg"
import instagram from "./instagram.png"
import "./App.css"
 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={icone} className="App-logo" alt="logo" />
          <div>
            <p>Contato: </p>
            <a href="mailto: social@fuzue.art">
              social@fuzue.art
            </a>
            <h1>Site em Construção</h1>
          </div>
          <a href="https://www.instagram.com/social.fuzue.art/">
            <img src={instagram} className="Instagram-logo" alt="instagram" />
          </a>
        </header>
      </div>
    )
  }
}

export default App
