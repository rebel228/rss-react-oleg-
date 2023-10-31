import * as React from 'react';
import SearchForm from '../SearchForm/SearchForm';

export interface IAppProps {}

export default class Header extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <img style={{ maxWidth: 100 }} src="/logo.png" alt="logo" />
        <SearchForm />
      </div>
    );
  }
}
