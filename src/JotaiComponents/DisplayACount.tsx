import {countAAtom} from './store';
import {useAtomValue} from 'jotai';

const DisplayACount = () => {
  const countA = useAtomValue(countAAtom);
  return (
    <div>
      <h3>Always Displayed Count A:</h3>
      <p className="display">CountA: {countA} </p>
    </div>
  );
};

DisplayACount.displayName = 'DisplayACount';

export default DisplayACount;
