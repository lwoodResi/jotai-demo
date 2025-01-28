import {useSetAtom} from 'jotai';
import {countAAtom} from './store';
import DisplayACount from './DisplayACount';

const GrandChildALevel2 = () => {
  const setCount1 = useSetAtom(countAAtom);
  return (
    <div className="grandchild-a-level-2">
      <h1>I'm Grandchild A - level 2</h1>
      <h3>I need count, and I'm also going to set count.</h3>
      <button onClick={() => setCount1(c => c + 1)}>Set Count A</button>
      <DisplayACount />
    </div>
  );
};

GrandChildALevel2.displayName = 'GrandChildALevel2';

export default GrandChildALevel2;
