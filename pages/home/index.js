

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import confs from './confs.json';

function whoFormatter(cell, row) {
  return `${cell} (${row.year}) <a href='${row.source}' target='_other'><span style='font-size: 10px' class='glyphicon glyphicon-link'></span></a>`;
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
      return `${s.percentageColourBlock} ${s.percentageCohortF}`;
    } else if (percentage < 20) {
      return `${s.percentageColourBlock} ${s.percentageCohortE}`;
    } else if (percentage < 30) {
      return `${s.percentageColourBlock} ${s.percentageCohortD}`;
    } else if (percentage < 40) {
      return `${s.percentageColourBlock} ${s.percentageCohortC}`;
    } else if (percentage < 50) {
      return `${s.percentageColourBlock} ${s.percentageCohortB}`;
    } else {
      return `${s.percentageColourBlock} ${s.percentageCohortA}`;
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
        <div className={s.descriptionText} dangerouslySetInnerHTML={{ __html: html }} />
        <BootstrapTable data={this.state.confs}
          condensed bordered={ false }
          // tableClassName={s.confTable}
          tableStyle={ { border: "none" }}
          >
          <TableHeaderColumn
            isKey
            dataField='diversityPercentage'
            columnClassName={ genderDiversityStyle }
            dataAlign='center'
            dataFormat={ genderDiversityFormatter }
            dataSort={ true }
            headerAlign='center'
            width='50'
            >f:m</TableHeaderColumn>
          <TableHeaderColumn dataField='name' dataFormat={ whoFormatter } dataSort={ true } width='200'>who</TableHeaderColumn>
          <TableHeaderColumn dataField='numberOfWomen' dataSort={ true } headerAlign='right' dataAlign='right' width='80'>#f</TableHeaderColumn>
          <TableHeaderColumn dataField='numberOfMen' dataSort={ true } headerAlign='right' dataAlign='right' width='80'>#m</TableHeaderColumn>
          <TableHeaderColumn dataField='year' dataFormat={ yearFormatter } dataSort={ true } width='120'>when</TableHeaderColumn>
          <TableHeaderColumn dataField='location'>where</TableHeaderColumn>
        </BootstrapTable>
      </Layout>
    );
  }

}

export default HomePage;
