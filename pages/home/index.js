import React, { PropTypes } from 'react';
import Layout   from '../../components/Layout';
import ConfList from '../../components/ConfList';
import Callouts from '../../components/Callouts';
import Legend from '../../components/Legend';
import s from './styles.css';
import { title, html } from './index.md';
import confs from './confs.json';
import _ from 'underscore';

function selectYearAndDiversity(conference, key) { 
  return _.pick(conference, 'year', 'diversityPercentage'); 
};

function sortByYear(conferences, confName, list) {
  return {name: confName, history: _.sortBy(_.map(conferences, selectYearAndDiversity), 'year')};
};

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.options = {};
    this.state = {confs:this.augmentConfData()};
  }

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  augmentConfData() {
    for (var i = 0; i < confs.length; i += 1) {
      confs[i]['numberOfMen'] = confs[i].totalSpeakers - confs[i].numberOfWomen;
      confs[i]['diversityPercentage'] = confs[i].numberOfWomen / confs[i].totalSpeakers * 100
    }

    // add historical diversity for conference
    this.confsByName = _.groupBy(confs, "name");
    this.confsHistory = _.map(this.confsByName, sortByYear);

    this.confsWithHistory = confs.map(function(currentConf, index, allConfs) {
      return Object.assign(currentConf, {history: _.find(this.confsHistory, function(conf) {
        return conf.name == currentConf.name;
      }).history}
    )}, this);

    // console.log(this.confsWithHistory);
    return this.confsWithHistory;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={s.descriptionText} dangerouslySetInnerHTML={{ __html: html }} />
        <Callouts confs={this.state.confs} />
        <ConfList confs={this.state.confs} />
        <br/>
        <Legend/>

      </Layout>
    );
  }

}

export default HomePage;
