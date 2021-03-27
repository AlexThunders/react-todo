import React, {useState,createContext} from 'react';

export const CalendarContext = createContext();

const CalendarContextProvider = ({children}) => {
  const [months, setMonths] = 
  useState(['January','February','March','April','Mai','June','July','August','September','October','November','December']
    );

  return (
    <div>
      <CalendarContext.Provider value={{months}}>
        {children}
      </CalendarContext.Provider>
    </div>
  );
}
 
export default CalendarContextProvider;


