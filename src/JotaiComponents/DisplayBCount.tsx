import {countBAtom} from './store';
import {useAtomValue} from 'jotai';

const DisplayBCount = () => {
  const countB = useAtomValue(countBAtom);
  return (
    <div>
      <p className="display">countB: {countB} </p>
    </div>
  );
};

DisplayBCount.displayName = 'DisplayBCount';

export default DisplayBCount;
