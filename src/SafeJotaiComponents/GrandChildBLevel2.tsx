import DisplayBCount from './DisplayBCount';
import {useCount} from './useCount';

const GrandChildBLevel2 = () => {
  const {setSafeCountB} = useCount();
  return (
    <div className="grandchild-b-level-2">
      <h1>I'm Grandchild B - level 2</h1>
      <h3>I need count, and I'm also going to set count.</h3>
      <button onClick={() => setSafeCountB(c => c + 1)}>Set Count B</button>
      <DisplayBCount />
    </div>
  );
};

GrandChildBLevel2.displayName = 'GrandChildBLevel2';

export default GrandChildBLevel2;
