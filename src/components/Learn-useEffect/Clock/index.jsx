import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

Clock.propTypes = {};
function formatDate(date) {
    if (!date) return '';
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours} : ${minutes} : ${seconds} `;
}

function Clock() {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000);

        return () => {
            console.log('Clock cleanup')
            //cleanup
            clearInterval(clockInterval);
        }
    }, [])
    return (
        <div>
            <h1>Reac JS with Clock</h1>
            <p style={{ fontSize: '42px' }}> {timeString}</p>
        </div>
    );
}

export default Clock;