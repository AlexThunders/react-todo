import React, {useContext, useEffect, useState} from 'react';
import DayInfo from '../DayInfo';

import {MainContext} from '../contexts/MainContext';

const todayStyle = {
  fontWeight: 800,
  color: '#f00'
}
const toDoStyle = {
  fontWeight: 900,
  color: 'purple',
  backgroundColor: '#dcf'
}
const withoutStyle = {color: ''}

const today = new Date().getDate();
const currentMonth = new Date().getMonth()

const Day = ({day, monthIndex}) => {
  const {items} = useContext(MainContext);  
  const [withStyle, setWithStyle] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleStyle = () => withStyle ? toDoStyle : withoutStyle;
  const handleToday = () => {
    return (day === today && currentMonth === monthIndex) ? todayStyle : withoutStyle
  };


  const init = () => {
    loading && items.filter(item => {
      item.dates.map(date => {
        const monthInDate = parseInt(date.toString().slice(5,7)) - 1;
        date = date.toString().slice(8);
        //delete 0 in numbers like 01,02 to compare with days
        if(date.indexOf(0) === 0) {
          date = date.toString().slice(1)
        }
        let d = day.toString()
        //compare dates and month to color only specific month:
        if(date && date === d && monthInDate === monthIndex) {
          setWithStyle(true)
        } 
      })
    })
  }
  
  useEffect(() => {
    if(items !== undefined) {
      setLoading(false)
      init();
    }
  },[items])

  const handleDayClick = () => withStyle && setShowInfo(true);
  const handleCloseDayInfo = () => {
    setShowInfo(false)
  };

  if(loading) return <div></div>

  return (
    <div style={handleToday()}>
      <div className="day" style={handleStyle()} onClick={handleDayClick}>{day}</div>
      {showInfo && <DayInfo 
        items={items}
        day={day}
        handleCloseDayInfo={handleCloseDayInfo} 
      ></DayInfo>}
    </div>
  )
}

export default Day
