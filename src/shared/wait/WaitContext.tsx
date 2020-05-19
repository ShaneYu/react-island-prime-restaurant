import React, { useContext, useState } from 'react';

export interface WaitingContext {
  isWaiting: (name: string) => boolean;
  anyWaiting: (names?: string | string[]) => boolean;
  startWaiting: (nameOrNames: string) => void;
  endWaiting: (nameOrNames: string | string[]) => void;
  endAllWaiting: () => void;
}

type InternalWaitingContext = WaitingContext & { waiters: string[] };

export const WaitingContext = React.createContext<InternalWaitingContext>(
  {} as InternalWaitingContext
);
export const useWait = () => useContext(WaitingContext);

interface WaitingProviderProps {
  children: React.ReactNode;
}

export const WaitingProvider = ({ children }: WaitingProviderProps) => {
  const [waiters, setWaiters] = useState<string[]>([]);

  const isWaiting = (name: string) => waiters.includes(name);

  const anyWaiting = (names?: string | string[]) => {
    if (!names) {
      return waiters.length > 0;
    }

    return Array.isArray(names)
      ? names.some((name) => isWaiting(name))
      : isWaiting(names);
  };

  const startWaiting = (nameOrNames: string | string[]) => {
    const newWaiters = Array<string>()
      .concat(nameOrNames)
      .filter((name) => !isWaiting(name));

    if (newWaiters.length === 0) {
      return;
    }

    setWaiters([...waiters, ...newWaiters]);
  };

  const endWaiting = (nameOrNames: string | string[]) => {
    const names = Array<string>().concat(nameOrNames);
    setWaiters(waiters.filter((waiter) => !names.includes(waiter)));
  };

  const endAllWaiting = () => setWaiters([]);

  return (
    <WaitingContext.Provider
      value={{
        waiters,
        isWaiting,
        anyWaiting,
        startWaiting,
        endWaiting,
        endAllWaiting,
      }}
    >
      {children}
    </WaitingContext.Provider>
  );
};
