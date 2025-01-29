import ChildLevel1 from './ChildLevel1';
import './styles.css';

const HookJotaiPage = () => {
  return (
    <div className="page-a">
      <h1>Hook ---- Page A - Jotai</h1>
      <h3>I don't need any counts, but I have some components that do.</h3>
      <ChildLevel1 />
    </div>
  );
};

HookJotaiPage.displayName = 'HookJotaiPage';

export default HookJotaiPage;
