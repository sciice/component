import React from 'react';

export default class Authorize extends React.PureComponent {
  render() {
    const { authorize, children, auth } = this.props;

    return authorize.includes(auth) ? children : null;
  }
}
