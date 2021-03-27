import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';

export default function DayInfo({items,day,handleCloseDayInfo}) {
  const [textArea, setTextArea] = useState('You can add some comments here....');
  const [textAreaDatas, setTextAreaDatas] = useState(() => {
    const localData = localStorage.getItem('textAreaDatas');
    return localData ? JSON.parse(localData) : [];
  });
  let dateInState, title, complete;

  const saveTextAreaDatas = (e) => {
      setTextAreaDatas([...textAreaDatas, {day: dateInState, text: textArea}]);
      textAreaDatas.length > 0 && textAreaDatas.map(data => {
        if(data.day == dateInState) {
          let i = textAreaDatas.indexOf(data);
          textAreaDatas.splice(i,1,{day: dateInState, text: textArea})
          setTextAreaDatas([...textAreaDatas]);
        } 
      })
  }
  
  useEffect(() => {
    localStorage.setItem('textAreaDatas',JSON.stringify(textAreaDatas));
    textAreaDatas.map(data => {
      if(data.day === dateInState) {
        setTextArea(data.text);
      }
    })
  },[textAreaDatas])
  
  
  const handleInfo = () => {
      items && items.map(item => {
        item.dates.map(date => {
          let formatDate = date.toString().slice(8);
          if(formatDate.indexOf(0) === 0) {
            formatDate = formatDate.toString().slice(1);
          }
          if(formatDate === day) {
            dateInState = date;
            title = item.title;
            complete = item.complete ? 'complete' : 'pending';
          }
        })
      })
    }
  handleInfo();
  
  return ReactDom.createPortal(
    <>
      <div className="infoPortal">
        <div className="infoPortalClose" onClick={handleCloseDayInfo}>x</div>
        <h5>{dateInState}</h5>
        <ul>
          <li>{title}</li>
          <li>{complete}</li>
        </ul>
        <button onClick={saveTextAreaDatas} className="saveTextArea">save</button>
          <textarea 
            value={textArea}
            // onFocus={() => setTextArea('')}
            onChange={e => setTextArea(e.target.value)}
          />
      </div>
    </>,
    document.getElementById('infoPortal')
  )
}
