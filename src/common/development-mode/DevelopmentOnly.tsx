import React, { PropsWithChildren } from 'react';

import isDevelopment from './isDevelopment';

const DevelopmentOnly: React.FC<PropsWithChildren<unknown>> = (props) => {
  const { children } = props;
  return isDevelopment() ? <>{children}</> : null;
};

export default DevelopmentOnly;
