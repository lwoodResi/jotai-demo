import * as React from 'react';
import {CountContext} from './store';
import ReactDisplayB from './ReactDisplayB';

const GrandChildBLevel2 = () => {
  const {countB, setCountB} = React.useContext(CountContext);

  return (
    <div className="grandchild-b-level-2">
      <h1>I'm Grandchild B - level 2</h1>
      <h3>I need count, and I'm also going to set count.</h3>
      <button onClick={() => setCountB(countB + 1)}>Set Count B</button>
      <ReactDisplayB />
    </div>
  );
};

GrandChildBLevel2.displayName = 'GrandChildALevel2';

export default GrandChildBLevel2;
