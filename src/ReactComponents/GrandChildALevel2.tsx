import * as React from 'react';
import {CountContext} from './store';
import ReactDisplayA from './ReactDisplayA';

const GrandChildALevel2 = () => {
  const {countA, setCountA} = React.useContext(CountContext);

  return (
    <div className="grandchild-a-level-2">
      <h1>I'm Grandchild A - level 2</h1>
      <h3>I need count, and I'm also going to set count.</h3>
      <button onClick={() => setCountA(countA + 1)}>Set Count A</button>
      <ReactDisplayA />
    </div>
  );
};

GrandChildALevel2.displayName = 'GrandChildALevel2';

export default GrandChildALevel2;
