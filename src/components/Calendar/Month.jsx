import React, {useEffect, useState, useContext} from 'react';
import {v4 as uuidv4} from 'uuid';
import Day from './Day';
import {CalendarContext} from '../contexts/CalendarContext';

const Month = ({index}) => {
  const [days, setDays] = useState([])
  const {months, dispatch} = useContext(CalendarContext);
  const monthName = months[index];

  const createMonth = () => {
    let daysPerMonth = days;
    let numbOfDays = 30;
    if(index % 2 === 0 && index < 7) numbOfDays = 31;
    if(index % 2 !== 0 && index >= 7) numbOfDays = 31;
    if(index === 1) numbOfDays = 28;
    for(let d = 1; d <= numbOfDays; d++) {
      d = d.toString();
      daysPerMonth.push(d)
    }
    setDays([...daysPerMonth])
  }
  
  useEffect(() => {
    createMonth();
  },[months])

  return (
    <div style={{margin:'0 15px'}}>
      <h3 className="monthHeading">{monthName}</h3>
      <div className="month">
        {days.map(day => <Day key={uuidv4()} day={day} monthIndex={index} />)}
      </div>
    </div>
  )
}

export default Month
