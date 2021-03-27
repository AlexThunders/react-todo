import React, {createContext,useState, useEffect, useReducer} from 'react';
import {reducer} from './reducer';

export const MainContext = createContext();

function MainContextProvider({children}) {
  const [items, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem('items');
    return localData ? JSON.parse(localData) : [];
  });
  // const [loading, setLoading] = useState(true);


  useEffect(() => {
    localStorage.setItem('items',JSON.stringify(items));
    // setLoading(false)
  }, [items])

  // if(loading) return <div></div>
  return (
    <div>
      <MainContext.Provider value={{items, dispatch}}>
        {children}
      </MainContext.Provider>
    </div>
  )
}

export default MainContextProvider
