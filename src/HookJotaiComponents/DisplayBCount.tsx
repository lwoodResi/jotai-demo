import {useCount} from './useCount';

const DisplayBCount = () => {
  const {countB} = useCount();
  return (
    <div>
      <p className="display">countB: {countB} </p>
    </div>
  );
};

DisplayBCount.displayName = 'DisplayBCount';

export default DisplayBCount;
