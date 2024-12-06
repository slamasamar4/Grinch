import React from 'react';

const GrinchMeter = ({ stolenCount }) => {
  return (
    <div className="grinch-meter">
      <p>Grinch-o-Meter: {stolenCount} stolen cases!</p>
    </div>
  );
};

export default GrinchMeter;
