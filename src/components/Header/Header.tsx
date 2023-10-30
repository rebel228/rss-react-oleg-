import * as React from 'react';
import SearchForm from '../SearchForm/SearchForm';

export interface IAppProps {}

export default class Header extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <SearchForm />
      </div>
    );
  }
}
