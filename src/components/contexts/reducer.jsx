import {v4 as uuidv4} from 'uuid';

export const reducer = (items, action) => {
  switch(action.type) {
    case "ADD_ITEM": 
      return [...items, {
        id: uuidv4(),
        title: action.inp,
        complete: false,
        editable: false,
        withDate: false,
        dates: []
      }];

    case "CLEAR": 
      localStorage.setItem('textAreaDatas',JSON.stringify([]));
      return [];

    case "EDIT":
      const newArr = items.map(item => {
        if(item.id === action.id) {
          return {...item, editable: !item.editable};
        }
        return item;
      })
      return newArr;

    case "EDIT_VALUE":
      const editedArr = items.map(item => {
        if(item.id === action.id) {
          return {...item, title: action.newInp, editable: false};
        }
        return item;
      })
      return editedArr;
    
    case "DELETE": 
      const filteredArr = items.filter(item => item.id !== action.id)
      return filteredArr;

    case "COMPLETION":
      const arrWithComplete = items.map(item => {
        if(item.id === action.id) {
          return {...item, complete: !item.complete};
        }
        return item;
      })
      return arrWithComplete;

    case "SET_WITH_DATE": 
      const withDate = items.map(item => {
        if(item.id === action.id) {
          return {...item, withDate: !item.withDate};
        }
        return item;
      })  
      return withDate;

    case "ADD_DATE":
      const itemsWithDates = items.map(item => {
        if(item.id === action.id) {
          return {...item, dates: [...item.dates, action.date]};
        }
        return item;
      })
      return itemsWithDates;
      
    default:
      return items;
  }
}