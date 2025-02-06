import {countBAtom} from './store';
import {useAtomValue} from 'jotai';

const DisplayBCount = () => {
  const countB = useAtomValue(countBAtom);
  return (
    <div>
      <h3>Always Displayed Count B:</h3>
      <p className="display">CountB: {countB} </p>
    </div>
  );
};

DisplayBCount.displayName = 'DisplayBCount';

export default DisplayBCount;
