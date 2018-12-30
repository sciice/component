import React from 'react';
import Authorize from '../authorize';
import { Button } from 'antd';

export default class AuthorizeButton extends React.PureComponent {
  render() {
    const { children, authorize, auth, ...restProps } = this.props;
    return (
      <Authorize auth={auth} authorize={authorize}>
        <Button {...restProps}>{children}</Button>
      </Authorize>
    );
  }
}
