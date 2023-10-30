import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Header with search</h1>
        <h1>Cards</h1>
      </>
    )
  }
}

export default App
