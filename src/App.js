import React, { useState, useEffect } from 'react';
import '../src/styles/App.css';
import CalendarCase from './components/CalendarCase';
import GrinchMeter from './components/GrinchMeter';
import Header from './components/Header';
import Footer from './components/Footer';
import { getCurrentDay } from './utils/dateUtils';
import { getGrinchStolenCases } from './GrinchLogic';
import surprises from './surprises';

const TOTAL_DAYS = 24;

const App = () => {
  const today = getCurrentDay(); // Utility function to get the current date
  const [unlockedCases, setUnlockedCases] = useState([]);
  const [grinchStolen, setGrinchStolen] = useState([]);

  useEffect(() => {
    setGrinchStolen(getGrinchStolenCases(TOTAL_DAYS));
  }, []);

  const handleOpenCase = (day) => {
    if (day <= today && !unlockedCases.includes(day)) {
      setUnlockedCases([...unlockedCases, day]);
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="calendar">
        {[...Array(TOTAL_DAYS)].map((_, i) => {
          const day = i + 1;
          return (
            <CalendarCase
              key={day}
              day={day}
              isUnlocked={unlockedCases.includes(day)}
              isStolen={grinchStolen.includes(day)}
              surprise={surprises[day - 1]}
              onOpen={() => handleOpenCase(day)}
            />
          );
        })}
      </main>
      <GrinchMeter stolenCount={grinchStolen.length} />
      <Footer />
    </div>
  );
};

export default App;
