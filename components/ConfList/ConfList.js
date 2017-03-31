import React, { PropTypes } from 'react';
import s from './ConfList.css';
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

function genderDiversityRowStyle(row, rowIndex) {
  var percentage = row.diversityPercentage;
  if (percentage < 10) {
    return `${s.percentageCohortFTrans}`;
  } else if (percentage < 20) {
    return `${s.percentageCohortETrans}`;
  } else if (percentage < 30) {
    return `${s.percentageCohortDTrans}`;
  } else if (percentage < 40) {
    return `${s.percentageCohortCTrans}`;
  } else if (percentage < 50) {
    return `${s.percentageCohortBTrans}`;
  } else {
    return `${s.percentageCohortATrans}`;
  }
}

function genderDiversityCellStyle(percentage, row, rowIndex, columnIndex) {
  if (percentage < 10) {
    return `${s.percentageCohortF}`;
  } else if (percentage < 20) {
    return `${s.percentageCohortE}`;
  } else if (percentage < 30) {
    return `${s.percentageCohortD}`;
  } else if (percentage < 40) {
    return `${s.percentageCohortC}`;
  } else if (percentage < 50) {
    return `${s.percentageCohortB}`;
  } else {
    return `${s.percentageCohortA}`;
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

class ConfList extends React.Component {

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
    this.setState({confs: this.augmentConfData(confs)});
    this.refs.table.handleSort('desc', 'diversityPercentage');
  }

  render() {
    return (
      <BootstrapTable
        data={this.state.confs}
        ref="table"
        containerClass={s.confTable}
        condensed bordered={ false }
        trClassName={ genderDiversityRowStyle }
        tableStyle={ { border: "none" }}
        >
        <TableHeaderColumn
          isKey
          tdAttr={ { 'id': `${s.confTableRow}` } }
          dataField='diversityPercentage'
          columnClassName={ genderDiversityCellStyle }
          dataFormat={ genderDiversityFormatter }
          dataAlign='center'
          dataSort={ true }
          headerAlign='center'
          width='50'
          >f:m</TableHeaderColumn>
        <TableHeaderColumn
          dataField='name'
          tdAttr={ { 'id': `${s.confTableRow}` } }
          dataFormat={ whoFormatter }
          dataSort={ true }
          width='250'
          >who</TableHeaderColumn>
        <TableHeaderColumn
          dataField='numberOfWomen'
          tdAttr={ { 'id': `${s.confTableRow}` } }
          dataSort={ true }
          headerAlign='right'
          dataAlign='right'
          width='50'
          >#f</TableHeaderColumn>
        <TableHeaderColumn
          dataField='numberOfMen'
          tdAttr={ { 'id': `${s.confTableRow}` } }
          dataSort={ true }
          headerAlign='right'
          dataAlign='right'
          width='50'
          >#m</TableHeaderColumn>
        <TableHeaderColumn
          dataField='year'
          tdAttr={ { 'id': `${s.confTableRow}` } }
          dataFormat={ yearFormatter }
          dataSort={ true }
          width='120'
          >when</TableHeaderColumn>
        <TableHeaderColumn
          dataField='location'
          tdAttr={ { 'id': `${s.confTableRow}` } }
          >where</TableHeaderColumn>
      </BootstrapTable>
    );
  }

}

export default ConfList;
