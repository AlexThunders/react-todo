import React, {createContext,useState, useEffect, useReducer} from 'react';
import {reducer} from './reducer';

export const MainContext = createContext();

function MainContextProvider({children}) {
  const [items, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem('items');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('items',JSON.stringify(items));
  }, [items])

  return (
    <div>
      <MainContext.Provider value={{items, dispatch}}>
        {children}
      </MainContext.Provider>
    </div>
  )
}

export default MainContextProvider
