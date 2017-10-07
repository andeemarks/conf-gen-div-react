import s from './Callouts.css';
import React, { PropTypes } from 'react';
import numbro from 'numbro';


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
      bestPerformer: props.confs.sort(diversitySorter)[0],
      numberOfConfs: props.confs.length
    };
  }

  render() {
    return (
      <div className={s.container}>
        <div className="row">
          <div className="col-sm-3">
            <div className={s.title}>Conferences tracked</div>
            <div className={s.pop}>{this.state.numberOfConfs}</div>
          </div>
          <div className="col-sm-3">
            <div className={s.title}>Best performer</div>
            <div className={s.body}><strong>{this.state.bestPerformer.name} ({this.state.bestPerformer.year})</strong><br/>{numbro(this.state.bestPerformer.diversityPercentage).format('0')}%<br/>{this.state.bestPerformer.location}</div>
          </div>
          <div className="col-sm-3">
            <div className={s.title}>Biggest recent improver</div>
            <div className={s.body}><strong>1st Conf</strong><br/>+36%<br/>21% (2016) -> 57% (2017)</div>
          </div>
          <div className="col-sm-3" id={s.nbrConfAtParity}>
            <div className={s.title}>Number of confs >= 50%</div>
            <div className={s.pop}>{(this.state.confs.filter(diversityAtParityOrGreater)).length}</div>
          </div>
        </div>
      </div>
    );
  }

}

export default Callouts;
