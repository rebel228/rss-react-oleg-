import { Component } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import { IcharacterSchema } from './types';

interface IAppProps {}

class App extends Component<IAppProps> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      data: [],
      isSuccessRequest: true,
      isLoading: false,
    };
    this.toggleLoading = this.toggleLoading.bind(this);
    this.setRequestState = this.setRequestState.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  async componentDidMount() {
    // this.toggleLoading();
    let response;
    if (localStorage.getItem('searchQuery')) {
      response = await fetch(
        `https://www.narutodb.xyz/api/character/search?name=${localStorage.getItem(
          'searchQuery'
        )}`
      );
      const data = await response.json();
      const dataArr = [];
      dataArr.push(data);
      this.loadData(dataArr);
    } else {
      response = await fetch('https://www.narutodb.xyz/api/character');
      const data = await response.json();
      this.loadData(data.characters);
    }
  }

  setRequestState(state: boolean) {
    this.setState({ isSuccessRequest: state });
  }

  loadData(newData: IcharacterSchema) {
    this.setState({ data: newData });
  }

  toggleLoading() {
    const { isLoading } = this.state;
    this.setState({ isLoading: !isLoading });
  }

  render() {
    const { data, isLoading, isSuccessRequest } = this.state;

    return (
      <>
        <Header
          findCharacter={this.loadData}
          signRequest={this.setRequestState}
          toggleLoad={this.toggleLoading}
        />
        <Cards
          data={data}
          isLoading={isLoading}
          isSuccessRequest={isSuccessRequest}
        />
      </>
    );
  }
}

export default App;
