import React, { useEffect, useState } from 'react'

const CountDown = (props) => {

    const [count, setCount] = useState(props.date);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCount(calculateTimeLeft(props.date));
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, [props.date]);

      const calculateTimeLeft = (target) => {
        const now = new Date().getTime();
        const difference = new Date(target).getTime() - now;
    
        if (difference <= 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
        return { days, hours, minutes, seconds };
      };
    
      return (
        <div>
          {count.days}d {count.hours}h {count.minutes}m {count.seconds}s
        </div>
      );
    
    

  return (
    <div>{(count / 1000).toPrecision(3)}</div>
  )
}

export default CountDown