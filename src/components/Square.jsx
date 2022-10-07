import { useState } from 'react';

const Square = ({id, counter, setCounter}) => {

  const [changeBackgroundColor, setChangeBackgroundColor] = useState(false);
    
  const handleChange = () => {
    setChangeBackgroundColor(!changeBackgroundColor);
    setCounter(id)
  }
    
  return (
    <div 
      className='square' 
      style={{backgroundColor: counter === id ? 'red' : '#4000ff'}} 
      onClick={ handleChange }
    >
      {id === 2 && <span>{counter}</span>}
    </div>
  )
}
export default Square;