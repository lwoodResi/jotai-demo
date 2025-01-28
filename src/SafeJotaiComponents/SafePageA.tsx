import ChildLevel1 from './ChildLevel1';
import './styles.css';
import {useCount} from './useCount';

const SafePageA = () => {
  const {isOnSafePageA} = useCount();
  return (
    <div className="page-a">
      <h1>Safe ---- Page A - Jotai</h1>
      {isOnSafePageA && <h2>Confirmed from global route</h2>}
      <h3>I don't need any counts, but I have some components that do.</h3>
      <ChildLevel1 />
    </div>
  );
};

SafePageA.displayName = 'SafePageA';

export default SafePageA;
