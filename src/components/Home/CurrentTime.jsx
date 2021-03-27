import React, {useState, useEffect} from 'react';

const CurrentTime = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  


  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date().toLocaleString())
    },1000)
    return () => clearInterval(timeInterval)
  },[time])



  return (
    <div style={{textAlign: 'center'}}>
      {time}
    </div>
  );
}
 
export default CurrentTime;

