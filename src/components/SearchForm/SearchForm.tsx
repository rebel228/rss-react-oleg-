import * as React from 'react';

export interface IAppProps {}

export default class SearchForm extends React.Component<IAppProps> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      searchQuery: localStorage.getItem('searchQuery') ?? '',
    };
  }

  // Обработчик изменения поля ввода
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: event.target.value });
  };

  // Обработчик отправки формы
  handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { searchQuery } = this.state;
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    localStorage.setItem('searchQuery', searchQuery);
    // Здесь можно выполнить поиск с использованием this.state.searchQuery
    const response = await fetch(
      `https://www.narutodb.xyz/api/character/search?name=${searchQuery}`
    );
    if (response.ok) {
      // const data = await response.json();
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Please enter Full Name e.g. Sasuke Uchiha"
          value={searchQuery}
          onChange={this.handleInputChange}
        />
        <button type="submit">Find</button>
      </form>
    );
  }
}
