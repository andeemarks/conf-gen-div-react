import React, { PropTypes } from 'react';
import s from './Callouts.css';


function diversityAtParityOrGreater(conf) {
  return conf.diversityPercentage >= 50;
}

class Callouts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      confs: props.confs
    };
  }

  render() {
    return (
      <div className={s.container}>
        <div className="row">
          <div className="col-sm-4">
            <div id={s.title}>Best performer</div>
            <div id={s.body}><strong>Code Mania 2016</strong><br/>58%<br/>Auckland, New Zealand</div>
          </div>
          <div className="col-sm-4">
            <div id={s.title}>Biggest recent improver</div>
            <div id={s.body}><strong>1st Conf</strong><br/>+36%<br/>21% (2016) -> 57% (2017)</div>
          </div>
          <div className="col-sm-4" id={s.nbrConfAtParity}>
            <div id={s.title}>Number of confs >= 50%</div>
            <div id={s.body}>{(this.state.confs.filter(diversityAtParityOrGreater)).length}</div>
          </div>
        </div>
      </div>
    );
  }

}

export default Callouts;
