import React from 'react';
import { render, shallow, mount } from 'enzyme';
import Table from '.';

describe('Table', () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
  ];

  const data = [
    { key: 0, name: 'Jack' },
    { key: 1, name: 'Lucy' },
    { key: 2, name: 'Tom' },
    { key: 3, name: 'Jerry' },
  ];

  const meta = { current_page: 1, per_page: 2, total: 4 };

  function createTable(props) {
    return <Table columns={columns} dataSource={data} meta={meta} {...props} />;
  }

  function renderedNames(wrapper) {
    return wrapper.find('TableRow').map(row => row.props().record.name);
  }

  it('renders pagination correctly', () => {
    const wrapper = render(createTable());
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.ant-pagination')).toHaveLength(1);
  });

  it('change to correct page when data source changes', () => {
    const handleChange = jest.fn();
    const wrapper = mount(createTable({ meta: { per_page: 1 }, metaOnChange: handleChange }));
    wrapper.find('.ant-pagination-item-3').simulate('click');
    wrapper.setProps({ dataSource: [data[0]] });
    expect(wrapper.find('.ant-pagination-item-1').hasClass('ant-pagination-item-active')).toBe(
      true
    );
  });

  it('fires change event', () => {
    const handleChange = jest.fn();
    const handlePaginationChange = jest.fn();
    const noop = () => {};
    const wrapper = mount(
      createTable({
        meta: { per_page: 2 },
        metaOnChange: handlePaginationChange,
        onChange: handleChange,
      })
    );

    wrapper
      .find('Pager')
      .last()
      .simulate('click');

    expect(handleChange).toBeCalledWith(
      {
        current: 2,
        pageSize: 2,
      },
      {},
      {},
      {
        currentDataSource: [
          { key: 0, name: 'Jack' },
          { key: 1, name: 'Lucy' },
          { key: 2, name: 'Tom' },
          { key: 3, name: 'Jerry' },
        ],
      }
    );

    expect(handlePaginationChange).toBeCalledWith(2, 2);
  });
});
