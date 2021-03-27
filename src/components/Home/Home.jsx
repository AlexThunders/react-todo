import React, {useState, useContext} from 'react';
import {v4 as uuidv4} from 'uuid';
import {MainContext} from '../contexts/MainContext'; 
import Item from './Item';
import Month from '../Calendar/Month';
import CurrentTime from './CurrentTime';

const Home = () => {
  const [inp, setInp] = useState('');
  const {items, dispatch} = useContext(MainContext);
  const [index, setIndex] = useState(new Date().getMonth())

  const handleSubmitItem = (e) => {
    e.preventDefault();
    dispatch({type: "ADD_ITEM", inp});
    setInp('');
  }

  return (
    <div className="home">
      <div>
        <h5>Add a new task:</h5>
        <form onSubmit={handleSubmitItem}>
          <input 
            type="text"
            value={inp}
            onChange={e => setInp(e.target.value)}
            required
          />
          <input type="submit" value="add" />
        </form>
  
        {items.length > 0 && items.map(item => (
          <Item key={uuidv4()} item={item}/>
          ))}

        <button className="clearAll" onClick={() => dispatch({type:"CLEAR"})}>Clear all</button>
      </div>
          <div>
            <CurrentTime />
            <Month index={index} />
          </div>
    </div>
  )
}

export default Home
