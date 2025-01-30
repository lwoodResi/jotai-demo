import * as React from 'react';
import {CountContext} from './store';
import GrandChildALevel2 from './GrandChildALevel2';
import GrandChildBLevel2 from './GrandChildBLevel2';

const ChildLevel1 = () => {
  const counts = React.useContext(CountContext);
  const totalCount = React.useMemo(
    () => counts.countA + counts.countB,
    [counts.countA, counts.countB]
  );
  return (
    <div className="child-level-1">
      <h1>I'm the first child.</h1>
      <h3>I only want to display total count that is set by my children.</h3>
      <p className="display">TOTAL COUNT: {totalCount}</p>
      <GrandChildALevel2 />
      <GrandChildBLevel2 />
    </div>
  );
};

ChildLevel1.displayName = 'ChildLevel1';

export default ChildLevel1;
