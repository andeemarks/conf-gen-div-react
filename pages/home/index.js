

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import confs from './confs.json';

function whoFormatter(cell, row) {
  return `<a href='${row.source}' target='_other'><span style='font-size: 10px' class='glyphicon glyphicon-link'></span></a> ${cell} (${row.year})`;
}

function numberOfMenFormatter(cell, row) {
  return row.totalSpeakers - row.numberOfWomen;
}

function genderDiversityFormatter(cell, row) {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumIntegerDigits: 1,
    maximumIntegerDigits: 2,
    maximumFractionDigits: 0,
  });

  return `${formatter.format(cell)}%`;
}

function genderDiversityStyle(percentage, row, rowIndex, columnIndex) {
    if (percentage < 10) {
      return "percentage-cohort-f";
    } else if (percentage < 20) {
      return "percentage-cohort-e";
    } else if (percentage < 30) {
      return "percentage-cohort-d";
    } else if (percentage < 40) {
      return "percentage-cohort-c";
    } else if (percentage < 50) {
      return "percentage-cohort-b";
    } else {
      return "percentage-cohort-a";
    }

}

function yearFormatter(cell, row) {
    var thisYear = new Date().getFullYear();
    var yearDiff = thisYear - cell;
    if (yearDiff == 0) {
      return "this year";
    } else if (yearDiff == 1) {
      return "last year";
    } else {
      return yearDiff + " years ago";
    }
}

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.options = {
      defaultSortName: 'diversityPercentage',
      defaultSortOrder: 'desc',
      sortIndicator: true
    };

    this.state = {
      confs:[]
    };
  }

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  augmentConfData(confs) {
    for (var i = 0; i < confs.length; i += 1) {
      confs[i]['numberOfMen'] = confs[i].totalSpeakers - confs[i].numberOfWomen;
      confs[i]['diversityPercentage'] = confs[i].numberOfWomen / confs[i].totalSpeakers * 100
    }

    return confs;
  }

  componentDidMount() {
    document.title = title;
    this.setState({confs: this.augmentConfData(confs)});
  }

  render() {
    return (
      <Layout className={s.content}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <BootstrapTable data={this.state.confs} condensed bordered={ false }>
          <TableHeaderColumn isKey dataField='name' dataFormat={ whoFormatter } dataSort={ true }>who</TableHeaderColumn>
          <TableHeaderColumn dataField='numberOfWomen' dataSort={ true } headerAlign='right' dataAlign='right'>#f</TableHeaderColumn>
          <TableHeaderColumn dataField='numberOfMen' dataSort={ true } headerAlign='right' dataAlign='right'>#m</TableHeaderColumn>
          <TableHeaderColumn dataField='diversityPercentage' columnClassName={ genderDiversityStyle } dataFormat={ genderDiversityFormatter } dataSort={ true } headerAlign='center'>#f:#m</TableHeaderColumn>
          <TableHeaderColumn dataField='year' dataFormat={ yearFormatter } dataSort={ true }>when</TableHeaderColumn>
          <TableHeaderColumn dataField='location'>where</TableHeaderColumn>
        </BootstrapTable>
      </Layout>
    );
  }

}

export default HomePage;
