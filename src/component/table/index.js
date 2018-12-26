import React, { Fragment, PureComponent } from 'react';
import { Table } from 'antd';

export default class TableComponent extends PureComponent {
  render() {
    const { meta, metaOnChange, ...restProps } = this.props;

    let pagination = false;

    if (meta) {
      pagination = {
        current: meta.current_page,
        pageSize: meta.per_page,
        total: meta.total,
        onChange: metaOnChange,
      };
    }

    return (
      <Fragment>
        <Table {...restProps} pagination={pagination} />
      </Fragment>
    );
  }
}
