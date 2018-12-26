import '@babel/polyfill';
import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { HeaderWrapper, Table, api } from './component';
import style from './index.less';

class Main extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    api.index('http://jsonplaceholder.typicode.com/users').then(data => {
      this.setState({
        data: data.data,
      });
    });
  }

  render() {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
      },
      {
        title: 'username',
        dataIndex: 'username',
      },
      {
        title: 'email',
        dataIndex: 'email',
      },
    ];

    const { data } = this.state;

    return (
      data && (
        <div className={style.home}>
          <HeaderWrapper title="Header">
            <Table dataSource={data} columns={columns} rowKey="id" />
          </HeaderWrapper>
        </div>
      )
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
