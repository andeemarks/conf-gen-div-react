

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var confs = [
  {
    "name":"Code Mania",
    "location":"Auckland, New Zealand",
    "year":"2017",
    "totalSpeakers":12,
    "numberOfWomen":5,
    "source":"http://codemania.io/agenda.html",
    "Notes":""
  },
  {
    "name":"Code Mania",
    "location":"Auckland, New Zealand",
    "year":"2016",
    "totalSpeakers":12,
    "numberOfWomen":7,
    "source":"http://codemania.io/2016/",
    "Notes":"CSS hiding the top two speakers"
  },
  {
    "name":"Code Mania",
    "location":"Auckland, New Zealand",
    "year":"2015",
    "totalSpeakers":12,
    "numberOfWomen":6,
    "source":"http://codemania.io/2015/",
    "Notes":"CSS hiding the top two speakers"
  },
  {
    "name":"Code Mania",
    "location":"Auckland, New Zealand",
    "year":"2014",
    "totalSpeakers":12,
    "numberOfWomen":3,
    "source":"http://codemania.io/2014/",
    "Notes":"CSS hiding the top two speakers"
  },
  {
    "name":"Code Mania",
    "location":"Auckland, New Zealand",
    "year":"2013",
    "totalSpeakers":10,
    "numberOfWomen":2,
    "source":"http://codemania.io/2013/",
    "Notes":"CSS hiding the top two speakers"
  },
  {
    "name":"Code Mania",
    "location":"Auckland, New Zealand",
    "year":"2012",
    "totalSpeakers":11,
    "numberOfWomen":1,
    "source":"http://codemania.io/2012/",
    "Notes":"CSS hiding the top two speakers"
  },
  {
    "name":"Agile Australia",
    "location":"Melbourne, Australia",
    "year":"2014",
    "totalSpeakers":63,
    "numberOfWomen":13,
    "source":"http://www.agileaustralia.com.au/2014/keynote-speakers/speakers",
    "Notes":""
  },
  {
    "name":"Agile Australia",
    "location":"Melbourne, Australia",
    "year":"2015",
    "totalSpeakers":70,
    "numberOfWomen":15,
    "source":"http://www.agileaustralia.com.au/2015/keynote-speakers/speakers",
    "Notes":""
  },
  {
    "name":"Agile Australia",
    "location":"Melbourne, Australia",
    "year":"2016",
    "totalSpeakers":62,
    "numberOfWomen":19,
    "source":"http://www.agileaustralia.com.au/2016/keynote-speakers/speakers",
    "Notes":""
  },
  {
    "name":"LAST",
    "location":"Melbourne, Australia",
    "year":"2015",
    "totalSpeakers":87,
    "numberOfWomen":19,
    "source":"http://lanyrd.com/2015/lastconf/speakers",
    "Notes":""
  },
  {
    "name":"LAST",
    "location":"Melbourne, Australia",
    "year":"2016",
    "totalSpeakers":133,
    "numberOfWomen":33,
    "source":"http://lanyrd.com/2016/lastconf/speakers",
    "Notes":""
  },
  {
    "name":"LAST",
    "location":"Melbourne, Australia",
    "year":"2013",
    "totalSpeakers":66,
    "numberOfWomen":12,
    "source":"http://lanyrd.com/2013/lastconf/speakers",
    "Notes":""
  },
  {
    "name":"LAST",
    "location":"Melbourne, Australia",
    "year":"2014",
    "totalSpeakers":66,
    "numberOfWomen":11,
    "source":"http://lanyrd.com/2014/lastconf/speakers",
    "Notes":""
  },
  {
    "name":"Webstock",
    "location":"Wellington, New Zealand",
    "year":"2017",
    "totalSpeakers":21,
    "numberOfWomen":11,
    "source":"http://www.webstock.org.nz/talks/#Webstock17",
    "Notes":""
  },
  {
    "name":"Webstock",
    "location":"Wellington, New Zealand",
    "year":"2016",
    "totalSpeakers":19,
    "numberOfWomen":10,
    "source":"http://www.webstock.org.nz/talks/#Webstock16",
    "Notes":""
  },
  {
    "name":"Webstock",
    "location":"Wellington, New Zealand",
    "year":"2014",
    "totalSpeakers":19,
    "numberOfWomen":7,
    "source":"http://www.webstock.org.nz/talks/#Webstock14",
    "Notes":""
  },
  {
    "name":"Webstock",
    "location":"Wellington, New Zealand",
    "year":"2015",
    "totalSpeakers":22,
    "numberOfWomen":8,
    "source":"http://www.webstock.org.nz/talks/#Webstock15",
    "Notes":""
  },
  {
    "name":"Webstock",
    "location":"Wellington, New Zealand",
    "year":"2013",
    "totalSpeakers":22,
    "numberOfWomen":5,
    "source":"http://www.webstock.org.nz/talks/#Webstock13",
    "Notes":""
  },
  {
    "name":"Webstock",
    "location":"Wellington, New Zealand",
    "year":"2012",
    "totalSpeakers":20,
    "numberOfWomen":9,
    "source":"http://www.webstock.org.nz/talks/#Webstock12",
    "Notes":""
  },
  {
    "name":"Webstock",
    "location":"Wellington, New Zealand",
    "year":"2011",
    "totalSpeakers":21,
    "numberOfWomen":4,
    "source":"http://www.webstock.org.nz/talks/#Webstock11",
    "Notes":""
  },
  {
    "name":"Webstock",
    "location":"Wellington, New Zealand",
    "year":"2010",
    "totalSpeakers":21,
    "numberOfWomen":3,
    "source":"http://www.webstock.org.nz/talks/#Webstock10",
    "Notes":""
  },
  {
    "name":"YOW",
    "location":"Melbourne, Australia",
    "year":"2016",
    "totalSpeakers":39,
    "numberOfWomen":13,
    "source":"http://melbourne.yowconference.com.au/",
    "Notes":""
  },
  {
    "name":"YOW",
    "location":"Melbourne, Australia",
    "year":"2014",
    "totalSpeakers":44,
    "numberOfWomen":8,
    "source":"http://melbourne.yowconference.com.au/",
    "Notes":"Speakers covers both workshops and sessions"
  },
  {
    "name":"YOW",
    "location":"Melbourne, Australia",
    "year":"2013",
    "totalSpeakers":37,
    "numberOfWomen":3,
    "source":"http://melbourne.yowconference.com.au/",
    "Notes":"Speakers covers both workshops and sessions"
  },
  {
    "name":"YOW",
    "location":"Melbourne, Australia",
    "year":"2015",
    "totalSpeakers":38,
    "numberOfWomen":7,
    "source":"http://melbourne.yowconference.com.au/",
    "Notes":"Speakers covers both workshops and sessions"
  },
  {
    "name":"YOW Lambda Jam",
    "location":"Brisbane, Australia",
    "year":"2013",
    "totalSpeakers":13,
    "numberOfWomen":0,
    "source":"https://www.conferize.com/conferences/yow-lambda-jam-2013/speakers",
    "Notes":""
  },
  {
    "name":"YOW Lambda Jam",
    "location":"Brisbane, Australia",
    "year":"2014",
    "totalSpeakers":12,
    "numberOfWomen":2,
    "source":"http://lanyrd.com/2014/yow-oz/speakers/",
    "Notes":""
  },
  {
    "name":"YOW Lambda Jam",
    "location":"Brisbane, Australia",
    "year":"2015",
    "totalSpeakers":32,
    "numberOfWomen":0,
    "source":"https://yow.eventer.com/yow-lambda-jam-2015-1305",
    "Notes":"Not including lightning talks"
  },
  {
    "name":"YOW West",
    "location":"Perth, Australia",
    "year":"2014",
    "totalSpeakers":26,
    "numberOfWomen":3,
    "source":"http://west.yowconference.com.au/",
    "Notes":""
  },
  {
    "name":"YOW West",
    "location":"Perth, Australia",
    "year":"2015",
    "totalSpeakers":34,
    "numberOfWomen":2,
    "source":"http://west.yowconference.com.au/",
    "Notes":""
  },
  {
    "name":"YOW West",
    "location":"Perth, Australia",
    "year":"2016",
    "totalSpeakers":30,
    "numberOfWomen":2,
    "source":"http://west.yowconference.com.au/",
    "Notes":""
  },
  {
    "name":"DevOps Days",
    "location":"Melbourne, Australia",
    "year":"2013",
    "totalSpeakers":7,
    "numberOfWomen":0,
    "source":"http://www.devopsdays.org/events/2013-downunder/program/",
    "Notes":"Partly unfonference - possible unscheduled talks by women"
  },
  {
    "name":"DevOps Days",
    "location":"Melbourne, Australia",
    "year":"2015",
    "totalSpeakers":9,
    "numberOfWomen":0,
    "source":"http://www.devopsdays.org/events/2015-melbourne/program/",
    "Notes":"Partly unfonference - possible unscheduled talks by women"
  },
  {
    "name":"DevOps Days",
    "location":"Brisbane, Australia",
    "year":"2014",
    "totalSpeakers":11,
    "numberOfWomen":1,
    "source":"https://legacy.devopsdays.org/events/2014-brisbane/program/",
    "Notes":"Partly unfonference - possible unscheduled talks by women"
  },
  {
    "name":"DevOps Days",
    "location":"Sydney, Australia",
    "year":"2016",
    "totalSpeakers":9,
    "numberOfWomen":2,
    "source":"https://www.devopsdays.org/events/2016-sydney/speakers/",
    "Notes":"Partly unfonference - possible unscheduled talks by women"
  },
 {
    "name":"RubyConf",
    "location":"Sydney, Australia",
    "year":"2014",
    "totalSpeakers":28,
    "numberOfWomen":3,
    "source":"http://www.rubyconf.org.au/2014#speakers",
    "Notes":"Not including lightning talks"
  },
  {
    "name":"RubyConf",
    "location":"Melbourne, Australia",
    "year":"2015",
    "totalSpeakers":23,
    "numberOfWomen":8,
    "source":"http://www.rubyconf.org.au/2015#speakers",
    "Notes":"Not including lightning talks"
  },
  {
    "name":"RubyConf",
    "location":"Gold Coast, Australia",
    "year":"2016",
    "totalSpeakers":27,
    "numberOfWomen":10,
    "source":"http://www.rubyconf.org.au/2016/speakers",
    "Notes":"Not including lightning talks"
  },
  {
    "name":"RubyConf",
    "location":"Melbourne, Australia",
    "year":"2017",
    "totalSpeakers":28,
    "numberOfWomen":10,
    "source":"http://www.rubyconf.org.au/2017/speakers",
    "Notes":"Not including lightning talks"
  },
 {
    "name":"Web Directions Code",
    "location":"Melbourne, Australia",
    "year":"2016",
    "totalSpeakers":16,
    "numberOfWomen":6,
    "source":"http://www.webdirections.org/code16/",
    "Notes":""
  },
 {
    "name":"Web Directions Code",
    "location":"Melbourne, Australia",
    "year":"2015",
    "totalSpeakers":20,
    "numberOfWomen":3,
    "source":"http://www.webdirections.org/code15/",
    "Notes":""
  },
 {
    "name":"Web Directions Code",
    "location":"Melbourne, Australia",
    "year":"2014",
    "totalSpeakers":19,
    "numberOfWomen":3,
    "source":"http://www.webdirections.org/code14/",
    "Notes":""
  },
 {
    "name":"Web Directions Code",
    "location":"Melbourne, Australia",
    "year":"2013",
    "totalSpeakers":22,
    "numberOfWomen":4,
    "source":"http://www.webdirections.org/code13/",
    "Notes":""
  },
  {
    "name":"JS Conf Melbourne",
    "location":"Melbourne, Australia",
    "year":"2014",
    "totalSpeakers":10,
    "numberOfWomen":2,
    "source":"http://au.jsconf.com/speakers",
    "Notes":""
  },
  {
    "name":"JS Conf Melbourne",
    "location":"Melbourne, Australia",
    "year":"2016",
    "totalSpeakers":9,
    "numberOfWomen":5,
    "source":"http://2016.jsconfau.com/",
    "Notes":""
  }
];

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

  return `${formatter.format(cell)}'%`;
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
      defaultSortName: 'year',
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

  loadConfData() {
    // $.ajax({
    //   url: './confs.json',
    //   dataType: 'json',
    //   success: function(confs) {
    //     this.setState({confs: confs});
    //   }.bind(this)
    // });
  }

  augmentConfData(confs) {
    for (var i = 0; i < confs.length; i += 1) {
      confs[i]['numberOfMen'] = confs[i].totalSpeakers - confs[i].numberOfWomen;
      confs[i]['diversityPercentage'] = confs[i].numberOfWomen / confs[i].totalSpeakers * 100
    }

    return confs;
  }

  componentDidMount() {
    document.title = title;
    this.loadConfData();
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
          <TableHeaderColumn dataField='diversityPercentage' dataFormat={ genderDiversityFormatter } dataSort={ true } headerAlign='center' dataAlign='center'>#f:#m</TableHeaderColumn>
          <TableHeaderColumn dataField='year' dataFormat={ yearFormatter } dataSort={ true }>when</TableHeaderColumn>
          <TableHeaderColumn dataField='location'>where</TableHeaderColumn>
        </BootstrapTable>
      </Layout>
    );
  }

}

export default HomePage;
