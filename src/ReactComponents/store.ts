import * as React from 'react';

type CountContextType = {
  countA: number;
  countB: number;
  setCountA: React.Dispatch<React.SetStateAction<number>>;
  setCountB: React.Dispatch<React.SetStateAction<number>>;
};

export const CountContext = React.createContext<CountContextType>({
  countA: 0,
  countB: 0,
  // not a way to derive values since context setup is using default values
  // so something like total which can be setup easily in Jotai, must be derived in the component
  // or setup a reducer or hook to use it
  setCountA: () => {}, // Empty function as a placeholder
  setCountB: () => {},
});
