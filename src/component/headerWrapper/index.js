import React, { Component } from 'react';
import PageHeader from '../PageHeader';
import GridContent from './GridContent';
import 'antd/lib/breadcrumb/style';
import styles from './index.less';

class HeaderWrapper extends Component {
  render() {
    const { children, contentWidth, wrapperClassName, top, ...restProps } = this.props;
    return (
      <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
        {top}
        <PageHeader
          wide={contentWidth === 'Fixed'}
          home="首页"
          key="HeaderWrapper"
          itemRender={item => item.name}
          {...restProps}
        />
        {children ? (
          <div className={styles.content}>
            <GridContent>{children}</GridContent>
          </div>
        ) : null}
      </div>
    );
  }
}

export default HeaderWrapper;
