import {combinedCountAtom} from './store';
import {useAtomValue} from 'jotai';

const DisplayACount = () => {
  // NOTE: just like composing atoms in a hook has side effects, composing a combined atom
  // can also have side effects. Even if you aren't using the combined result, the atom will
  // re-run the getter function and update the components subscribed to it.
  // This makes sense and is fine if you are using the combined atom in multiple components.
  // But for simple cases, you're better off using the jotai hooks directly, like in <DisplayACount />
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
