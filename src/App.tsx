import './App.css';
import PageA from './JotaiComponents/PageA';
import DisplayACountA from './JotaiComponents/DisplayACount';
import DisplaySafeCountA from './SafeJotaiComponents/DisplayACount';
import useGlobalStore from './useGlobalStore';
import SafePageA from './SafeJotaiComponents/SafePageA';

function App() {
  // const [route, setRoute] = React.useState('pageA');
  const {route, setRoute} = useGlobalStore();
  return (
    <div>
      <nav className="nav">
        <button onClick={() => setRoute('pageA')}>Page A - Jotai</button>
        <button onClick={() => setRoute('safePageA')}>
          Safe Page A - Jotai
        </button>
      </nav>
      <div className="app">
        <div className="page">
          {route === 'pageA' && <PageA />}
          {route === 'safePageA' && <SafePageA />}
        </div>
        <DisplayACountA />
        <DisplaySafeCountA />
      </div>
    </div>
  );
}

export default App;
