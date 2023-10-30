import { Component } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Cards />
      </>
    );
  }
}

export default App;
