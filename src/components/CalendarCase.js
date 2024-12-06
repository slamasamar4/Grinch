import React from 'react';
import '../styles/Calendar.css';

const CalendarCase = ({ day, isUnlocked, isStolen, surprise, onOpen }) => {
  return (
    <div
      className={`case ${isUnlocked ? 'unlocked' : 'locked'}`}
      onClick={onOpen}
    >
      {isUnlocked ? (
        <div className="surprise">
          {isStolen ? <p>💨 Stolen by the Grinch!</p> : <p>{surprise}</p>}
        </div>
      ) : (
        <p>{day}</p>
      )}
    </div>
  );
};

export default CalendarCase;
