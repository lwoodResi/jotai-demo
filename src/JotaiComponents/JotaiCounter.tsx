import {atom, useAtom} from 'jotai';
import * as React from 'react';

const countAAtom = atom(0);
const countBAtom = atom(0);
const JotaiCounter = () => {
  const [countA, setCountA] = useAtom(countAAtom);
  const [countB, setCountB] = useAtom(countBAtom);

  React.useEffect(() => {
    console.count(`jotai countA: ${countA}`);
  }, [countA]);

  React.useEffect(() => {
    console.count(`jotai countB: ${countB}`);
  }, [countB]);
  return (
    <div>
      <h1>Jotai Counter</h1>
      <br />
      <button onClick={() => setCountA(c => c + 1)}>Count A: {countA}</button>
      <h1 />
      <button onClick={() => setCountB(c => c + 1)}>Count B: {countB}</button>
    </div>
  );
};

JotaiCounter.displayName = 'JotaiCounter';

export default JotaiCounter;
