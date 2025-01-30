import {useAtomValue} from 'jotai';
import GrandChildALevel2 from './GrandChildALevel2';
import './styles.css';
import GrandChildBLevel2 from './GrandChildBLevel2';
import {totalCountAtom} from './store';

const ChildLevel1 = () => {
  const totalCount = useAtomValue(totalCountAtom);

  return (
    <div className="child-level-1">
      <h1>I'm the first child.</h1>
      <h3>I only want to display total count that is set by my children.</h3>
      <p className="display">TOTAL COUNT: {totalCount}</p>
      <GrandChildALevel2 />
      <GrandChildBLevel2 />
    </div>
  );
};

ChildLevel1.displayName = 'ChildALevel1';

export default ChildLevel1;
