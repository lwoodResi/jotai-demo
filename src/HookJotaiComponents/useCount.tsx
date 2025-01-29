import {atom, useAtom, useAtomValue} from 'jotai';

// NOTE: I'm calling this safe because we are not exposing the atoms directly to the components.
// Instead, we can compose them further and export through a hook, giving access only to the
// getters and setters we want.
const countAAtom = atom(0);
const countBAtom = atom(0);

// This is a derived readonly atom. We can access different atoms and compose the values
// and return them as a part of this atom.
const totalCountAtom = atom(get => {
  const countA = get(countAAtom);
  const countB = get(countBAtom);
  const countTotal = countA + countB; // deriving value from other atoms
  return countTotal;
});

export const useCount = () => {
  const [countA, setCountA] = useAtom(countAAtom);
  const [countB, setCountB] = useAtom(countBAtom);
  const countTotal = useAtomValue(totalCountAtom);

  return {
    countA,
    countB,
    countTotal,
    setCountA,
    setCountB,
  };
};
