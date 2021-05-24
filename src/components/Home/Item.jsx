import React, {useContext, useEffect, useState} from 'react';
import {MainContext} from '../contexts/MainContext';

const Item = ({item}) => {
  const {dispatch} = useContext(MainContext);
  const [newInp, setNewInp] = useState(item.title);
  const id = item.id;

  const handleEdit = (id) => {
    dispatch({type:"EDIT", id})
  }

  const handleChangedValue = (e, id) => {
    if(e.keyCode === 13) {
      dispatch({type:"EDIT_VALUE", id, newInp})
    }
  }

  const handleDelete = (id) => {
    dispatch({type:"DELETE", id})
  }

  const checkCompletion = () => {
    return {textDecoration: item.complete ? 'line-through' : 'none'}
  }

  const handleDateInMobile = (e) => {
    const date = e.target.value.toString()
    dispatch({type:"SET_WITH_DATE",id})
    dispatch({type:"ADD_DATE", date, id})
  }

  return (
    <div className="item" style={checkCompletion()}>
      <input 
        type="checkbox"
        onChange={() => dispatch({type:"COMPLETION", id})}
      />

      {item.editable ? 
      <input 
        className="editInput"
        type="text"
        value={newInp}
        onKeyDown={(e) => handleChangedValue(e,id)}
        onChange={e => setNewInp(e.target.value)}
      /> : <span>{item.title}</span>} 

      {item.withDate ? 
        <>
          <input type="date" onChange={handleDateInMobile} on/>
          <button onClick={() => dispatch({type:"SET_WITH_DATE",id})}
            className="addDate">
            <i className="fas fa-calendar-plus"></i>
          </button>
        </> 
       :
        <>
          <button onClick={() => dispatch({type:"SET_WITH_DATE",id})} className="addDate">
            <i className="fas fa-calendar-plus"></i>
          </button>
        </>
      }

      <button onClick={() => handleEdit(id)}><i className="fas fa-pencil-alt"></i></button>   
      <button onClick={() => handleDelete(id)}><i className="fas fa-trash-alt"></i></button><hr/>   
    </div>
  )
}

export default Item
