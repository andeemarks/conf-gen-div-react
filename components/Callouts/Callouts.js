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
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            Biggest recent improver
          </div>
          <div className="col-sm-4">
            Number of confs >= 50%
          </div>
          <div className="col-sm-4">
            Best performer
          </div>
        </div>
      </div>
    );
  }

}

export default Callouts;
