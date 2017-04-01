import React, { PropTypes } from 'react';
import s from './Callouts.css';

class Callouts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className={s.container}>
        <div className="row">
          <div className="col-sm-4">
            <div id={s.title}>Biggest recent improver</div>
            <div id={s.body}>+36%<br/>1st Conf<br/>21% (2016) -> 57% (2017)</div>
          </div>
          <div className="col-sm-4" id={s.nbrConfAtParity}>
            <div id={s.title}>Number of confs >= 50%</div>
            <div id={s.body}>6</div>
          </div>
          <div className="col-sm-4">
            <div id={s.title}>Best performer</div>
            <div id={s.body}>58%<br/>Code Mania<br/>2016<br/>Auckland, New Zealand</div>
          </div>
        </div>
      </div>
    );
  }

}

export default Callouts;
