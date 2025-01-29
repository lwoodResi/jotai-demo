import {useCount} from './useCount';

const DisplayACount = () => {
  const {countA} = useCount();
  return (
    <div>
      <h3>Always Display Hook Count A:</h3>
      <p className="display">Hook CountA: {countA} </p>
    </div>
  );
};

DisplayACount.displayName = 'DisplayACount';

export default DisplayACount;
