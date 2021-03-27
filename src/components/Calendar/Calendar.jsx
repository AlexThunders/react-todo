import React, {useContext} from 'react';
import {CalendarContext} from '../contexts/CalendarContext';
import Month from './Month';
import {v4 as uuidv4} from 'uuid';

const Calendar = () => {
  const {months} = useContext(CalendarContext);

  return (
    <div className="calendar">
      {months.map((month) =>
      (
        <Month 
          key={uuidv4()}
          index={months.indexOf(month)}
        />
        ))}
    </div>
  );
}
 
export default Calendar;
