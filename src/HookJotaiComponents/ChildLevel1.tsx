import GrandChildALevel2 from './GrandChildALevel2';
import './styles.css';
import GrandChildBLevel2 from './GrandChildBLevel2';
import {useCount} from './useCount';

const ChildLevel1 = () => {
  const {countTotal} = useCount();

  return (
    <div className="child-level-1">
      <h1>I'm the first child.</h1>
      <h3>I only want to display total count that is set by my children.</h3>
      <p className="display">TOTAL COUNT: {countTotal}</p>
      <GrandChildALevel2 />
      <GrandChildBLevel2 />
    </div>
  );
};

ChildLevel1.displayName = 'ChildALevel1';

export default ChildLevel1;
