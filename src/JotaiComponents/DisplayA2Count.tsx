import {combinedCountAtom} from './store';
import {useAtomValue} from 'jotai';

const DisplayACount = () => {
  const {countA} = useAtomValue(combinedCountAtom);
  return (
    <div>
      <h3>Always Displayed Count A - 2 using combined atom:</h3>
      <p className="display">CountA: {countA} </p>
    </div>
  );
};

DisplayACount.displayName = 'DisplayACount';

export default DisplayACount;
