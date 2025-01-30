import {atom} from 'jotai';

export const countAAtom = atom(0);
export const countBAtom = atom(0);

export const totalCountAtom = atom(get => {
  const countA = get(countAAtom);
  const countB = get(countBAtom);
  const totalCount = countA + countB;
  return totalCount;
});

// test setup
export const combinedCountAtom = atom(get => {
  const countA = get(countAAtom);
  const countB = get(countBAtom);
  const totalCount = totalCountAtom;
  return {countA, countB, totalCount};
});
