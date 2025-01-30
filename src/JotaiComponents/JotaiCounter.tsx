import {atom, useAtom} from 'jotai';

// NOTE: creating an atom outside of the component avoids
// infinite re-renders because atom() would be called every time
const countAAtom = atom(0);
const countBAtom = atom(0);

const JotaiCounter = () => {
  const [countA, setCountA] = useAtom(countAAtom);
  const [countB, setCountB] = useAtom(countBAtom);

  return (
    <div>
      <h1>Jotai Counter</h1>
      <button onClick={() => setCountA(c => c + 1)}>Count A: {countA}</button>
      <button onClick={() => setCountB(c => c + 1)}>Count B: {countB}</button>
    </div>
  );
};

JotaiCounter.displayName = 'JotaiCounter';

export default JotaiCounter;
