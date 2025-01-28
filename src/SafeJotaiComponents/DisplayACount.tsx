import {useCount} from './useCount';

const DisplayACount = () => {
  const {countA} = useCount();
  return (
    <div>
      <h3>Always Display SAFE Count A:</h3>
      <p className="display">Safe CountA: {countA} </p>
    </div>
  );
};

DisplayACount.displayName = 'DisplayACount';

export default DisplayACount;
