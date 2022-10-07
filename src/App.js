import { useState } from 'react';
import './App.css';
import Square from './components/Square';

const App = () => {

  const squares = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    }
  ]
  const [counter, setCounter] = useState();

  return (
    <div className='square-wrap'>
      {squares.map(square => (
        <Square key={square.id} id={square.id} counter={counter} setCounter={setCounter} />
      ))}
    </div>
  );
}
export default App;
