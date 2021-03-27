import React from 'react';
// import {Calendar as ReactCalendar} from 'react-calendar';
import Calendar from '../Calendar/Calendar';

const Reminder = () => {
  // const [value, onChange] = useState(new Date());
  return (
    <div className="reminder">
        {/* <ReactCalendar 
          onChange={onChange}
          value={value}
        /> */}

        <Calendar />
    </div>
  )
}

export default Reminder
