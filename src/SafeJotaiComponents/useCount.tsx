import {atom, useAtomValue, useSetAtom} from 'jotai';
import {routeAtom} from '../globalStore';

// NOTE: I'm calling this safe because we are not exposing the atoms directly to the components.
// Instead, we can compose them further and export through a hook, giving access only to the
// getters and setters we want.
const safeCountAtom = atom(0);
const safeCountBAtom = atom(0);

// This is a derived readonly atom. We can access different atoms and compose the values
// and return them as a part of this atom.
const safeReadOnlyCountAtoms = atom(get => {
  const countA = get(safeCountAtom);
  const countB = get(safeCountBAtom);
  const safeCountTotal = countA + countB; // deriving value from other atoms
  const isOnSafePageA = get(routeAtom) === 'safePageA'; // getting value from global store when composing atom
  return {countA, countB, isOnSafePageA, safeCountTotal};
});

export const useCount = () => {
  const setSafeCountA = useSetAtom(safeCountAtom);
  const setSafeCountB = useSetAtom(safeCountBAtom);
  const {countA, countB, isOnSafePageA, safeCountTotal} = useAtomValue(
    safeReadOnlyCountAtoms
  );

  return {
    countA,
    countB,
    isOnSafePageA,
    safeCountTotal,
    setSafeCountA,
    setSafeCountB,
  };
};
