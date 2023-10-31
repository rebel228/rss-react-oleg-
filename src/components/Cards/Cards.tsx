import * as React from 'react';
import classes from './Cards.module.scss';
import { ICardsProps } from '../../types';

export default class Cards extends React.Component<ICardsProps> {
  public render() {
    if (this.props.isLoading) {
      return <div>Cards is loading...</div>;
    }
    if (this.props.isSuccessRequest) {
      return (
        <div className={classes.cards}>
          {this.props.data.map((item) => (
            <div className="card" key={item.id}>
              <div>
                <img src={item.images[0]} alt={item.name} />
              </div>
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      );
    }
    return (
      <>Nothing was found for this name. Try full name e.g. Shino Aburame</>
    );
  }
}
