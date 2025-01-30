import * as React from 'react';
import {CountContext} from './store';

const ReactDisplayB = () => {
  const {countB} = React.useContext(CountContext);
  return (
    <div>
      <h3>React: Always Displayed Count B:</h3>
      <p className="display">CountB: {countB} </p>
    </div>
  );
};

ReactDisplayB.displayName = 'ReactDisplayB';

export default ReactDisplayB;
