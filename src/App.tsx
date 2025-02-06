import * as React from 'react';
import './App.css';
import PageA from './JotaiComponents/PageA';
import DisplayACount from './JotaiComponents/DisplayACount';
import DisplayHookCountA from './HookJotaiComponents/DisplayACount';
import DisplayHookCountB from './HookJotaiComponents/DisplayBCount';
import useGlobalStore from './useGlobalStore';
import HookJotaiPageA from './HookJotaiComponents/HookJotaiPageA';
import {CountContext} from './ReactComponents/store';
import ReactPageA from './ReactComponents/ReactPageA';
import ReactDisplayA from './ReactComponents/ReactDisplayA';
import ReactDisplayB from './ReactComponents/ReactDisplayB';
import DisplayBCount from './JotaiComponents/DisplayBCount';

function App() {
  const {route, setRoute} = useGlobalStore();

  // NOTE: obviously more common to set this up with useReducer, but
  // I wanted to show the setup that would keep it as simple as possible for
  // comparison with Jotai
  const [countA, setCountA] = React.useState(0);
  const [countB, setCountB] = React.useState(0);

  return (
    <div>
      <nav className="nav">
        <button onClick={() => setRoute('jotaiPage')}>Page A - Jotai</button>
        <button onClick={() => setRoute('jotaiHookPage')}>
          Hook Page A - Jotai
        </button>
        <button onClick={() => setRoute('reactPage')}>React Page A</button>
      </nav>
      <div className="app"></div>
      {route === 'jotaiPage' && (
        <>
          <div className="page">
            <PageA />
          </div>
          <DisplayACount />
          <DisplayBCount />
        </>
      )}
      {route === 'jotaiHookPage' && (
        <>
          <div className="page">
            <HookJotaiPageA />
          </div>
          <DisplayHookCountA />
          <DisplayHookCountB />
        </>
      )}
      {route === 'reactPage' && (
        <>
          <CountContext.Provider value={{countA, countB, setCountA, setCountB}}>
            <div className="app">
              <div className="reactPageA">
                <ReactPageA />
              </div>
            </div>
            <ReactDisplayA />
            <ReactDisplayB />
          </CountContext.Provider>
        </>
      )}
      {route === 'reactPageA' && (
        // NOTE: must wrap with a provider and pass values and setters, or setup a reducer to use
        <CountContext.Provider value={{countA, countB, setCountA, setCountB}}>
          <div className="app">
            <div className="reactPageA">
              {route === 'reactPageA' && <ReactPageA />}
            </div>
            <ReactDisplayA />
            <ReactDisplayB />
          </div>
        </CountContext.Provider>
      )}
    </div>
  );
}

export default App;
