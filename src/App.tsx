import {useState} from 'react';
import './App.css';
import ReactCounter from './ReactCounter';
import JotaiCounter from './JotaiCounter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ReactCounter />
      <JotaiCounter />
    </>
  );
}

export default App;
