import React, { useState } from 'react'

const Clock = () => {

    const [time, setTime] = useState('00:00:00 AM');
    const [date, setDate] = useState('day, month 00, 0000');


    setInterval(() => {
    
        
        var dt = new Date();
        //show the day
        let hour = dt.getHours();
        let minute = dt.getMinutes();
        let second = dt.getSeconds();
        let xm = (hour >= 12) ? 'PM' : 'AM';

        hour = (hour > 12) ? hour - 12 : hour;
        hour = (hour === 0) ? hour = 12 : hour;
        hour = (hour < 10) ? '0' + hour : hour;

        minute = (minute < 10) ? '0' + minute : minute;
        second = (second < 10) ? '0' + second : second;

        setTime(hour + ':' + minute + ':' + second +'  '+ xm)



        // show the date ,month and year

        const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        let month = dt.getMonth();
        let curMonth = monthNames[month];

        let day = dt.getDay();
        let today = dayNames[day];

        let curdate = dt.getDate();
        let year = dt.getFullYear();

        curdate = (curdate < 10) ? '0' + curdate : curdate;

        setDate(today +','+curMonth + curdate +','+year)
    

    }, 1000)



    return (
        <div className='container'>
            <h1>{time}</h1>
            <p>{date}</p>
            
        </div>
    )
}

export default Clock