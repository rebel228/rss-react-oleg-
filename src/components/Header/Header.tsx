import * as React from 'react';
import { ISearchProps } from '../../types';
import SearchForm from '../SearchForm/SearchForm';

export default class Header extends React.Component<ISearchProps> {
  public render() {
    return (
      <div>
        <img style={{ maxWidth: 100 }} src="/logo.png" alt="logo" />
        <SearchForm />
      </div>
    );
  }
}
