import * as React from 'react';

const ReactCounter = () => {
  const [countA, setCountA] = React.useState(0);
  const [countB, setCountB] = React.useState(0);

  return (
    <div>
      <h1>React Counter</h1>
      <button onClick={() => setCountA(c => c + 1)}>Count A: {countA}</button>
      <button onClick={() => setCountB(c => c + 1)}>Count B: {countB}</button>
    </div>
  );
};

ReactCounter.displayName = 'ReactCounter';

export default ReactCounter;
