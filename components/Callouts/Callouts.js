import React, { PropTypes } from 'react';
import s from './Callouts.css';


function diversityAtParityOrGreater(conf) {
  return conf.diversityPercentage >= 50;
}

function diversitySorter(confA, confB) {
  if (confA.diversityPercentage < confB.diversityPercentage) {
    return 1;
  }
  if (confA.diversityPercentage > confB.diversityPercentage) {
    return -1;
  }

  return 0;
}

class Callouts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      confs: props.confs,
      bestPerformer: props.confs.sort(diversitySorter)[0]
    };

    console.log(this.state.bestPerformingConf);
  }

  render() {
    return (
      <div className={s.container}>
        <div className="row">
          <div className="col-sm-4">
            <div id={s.title}>Best performer</div>
            <div id={s.body}><strong>{this.state.bestPerformer.name} ({this.state.bestPerformer.year})</strong><br/>{this.state.bestPerformer.diversityPercentage}%<br/>{this.state.bestPerformer.location}</div>
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
