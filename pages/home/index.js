import React, { PropTypes } from 'react';
import Layout   from '../../components/Layout';
import ConfList from '../../components/ConfList';
import s from './styles.css';
import { title, html } from './index.md';

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.options = {
    };
  }

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={s.descriptionText} dangerouslySetInnerHTML={{ __html: html }} />
        <ConfList />
      </Layout>
    );
  }

}

export default HomePage;
