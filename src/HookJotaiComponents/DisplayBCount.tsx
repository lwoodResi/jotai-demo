import {useCount} from './useCount';

const DisplayBCount = () => {
  const {countB} = useCount();
  return (
    <div>
      <h3>Always Display Hook Count B:</h3>
      <p className="display">Hook CountB: {countB} </p>
    </div>
  );
};

DisplayBCount.displayName = 'DisplayBCount';

export default DisplayBCount;
