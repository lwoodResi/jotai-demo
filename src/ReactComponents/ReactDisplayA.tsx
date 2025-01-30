import * as React from 'react';
import {CountContext} from './store';

const ReactDisplayA = () => {
  const {countA} = React.useContext(CountContext);
  return (
    <div>
      <h3>React: Always Displayed Count A:</h3>
      <p className="display">CountA: {countA} </p>
    </div>
  );
};

ReactDisplayA.displayName = 'ReactDisplayA';

export default ReactDisplayA;
