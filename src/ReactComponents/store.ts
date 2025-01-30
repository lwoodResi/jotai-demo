import * as React from 'react';

export const CountContext = React.createContext({
  countA: 0,
  countB: 0,
  // not a way to derive values since context setup is using default values
  // so something like total which can be setup easily in Jotai, must be derived in the component
  // or setup a reducer or hook to use it
  setCountA: (count: number) => {},
  setCountB: (count: number) => {},
});
