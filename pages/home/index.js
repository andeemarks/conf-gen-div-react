import React, { PropTypes } from 'react';
import Layout   from '../../components/Layout';
import ConfList from '../../components/ConfList';
import Callouts from '../../components/Callouts';
import s from './styles.css';
import { title, html } from './index.md';
import confs from './confs.json';

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

    return confs;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={s.descriptionText} dangerouslySetInnerHTML={{ __html: html }} />
        <Callouts />
        <ConfList confs={this.state.confs} />
      </Layout>
    );
  }

}

export default HomePage;
