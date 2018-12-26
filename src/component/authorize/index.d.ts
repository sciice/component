import * as React from 'react';

export interface AuthorizeProps {
  auth: string;
  authorize: Array<string>;
}

export default class Authorize extends React.Component<AuthorizeProps, any> {}
