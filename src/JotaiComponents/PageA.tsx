import ChildLevel1 from './ChildLevel1';
import './styles.css';

const PageA = () => {
  return (
    <div className="page-a">
      <h1>Page A - Jotai</h1>
      <h3>I don't need any counts, but I have some components that do.</h3>
      <ChildLevel1 />
    </div>
  );
};

PageA.displayName = 'PageA';

export default PageA;
