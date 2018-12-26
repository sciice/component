import * as React from 'react';
import { TableProps } from 'antd/lib/table';

export interface MetaProps {
  current_page: number;
  pre_page: number;
  total: number;
}

export interface TableComponentProps<T> extends TableProps<T> {
  meta?: MetaProps;
  metaOnChange?: (page: number, pageSize?: number) => void;
}

export default class TableComponent<T> extends React.Component<TableComponentProps<T>, any> {}
