import React from 'react';

import { useWait } from './WaitContext';

export interface WaitProps {
  fallback: React.ReactElement;
  on: string | string[];
}

const Wait: React.FC<WaitProps> = ({ on, fallback, children }) => {
  const { anyWaiting } = useWait();

  return anyWaiting(on) ? fallback : <>{children}</>;
};

export default Wait;
