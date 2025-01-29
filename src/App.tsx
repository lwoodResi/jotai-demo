import './App.css';
import PageA from './JotaiComponents/PageA';
import DisplayACountA from './JotaiComponents/DisplayACount';
import DisplayA2CountA from './JotaiComponents/DisplayA2Count';
import DisplayHookCountA from './HookJotaiComponents/DisplayACount';
import useGlobalStore from './useGlobalStore';
import HookJotaiPageA from './HookJotaiComponents/HookJotaiPageA';

function App() {
  // const [route, setRoute] = React.useState('pageA');
  const {route, setRoute} = useGlobalStore();
  return (
    <div>
      <nav className="nav">
        <button onClick={() => setRoute('pageA')}>Page A - Jotai</button>
        <button onClick={() => setRoute('hookPageA')}>
          Hook Page A - Jotai
        </button>
      </nav>
      <div className="app">
        <div className="page">
          {route === 'pageA' && <PageA />}
          {route === 'hookPageA' && <HookJotaiPageA />}
        </div>
        <DisplayACountA />
        <DisplayA2CountA />
        <DisplayHookCountA />
      </div>
    </div>
  );
}

export default App;
