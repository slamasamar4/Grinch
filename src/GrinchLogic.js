export const getGrinchStolenCases = (totalDays) => {
    const stolenCount = Math.floor(totalDays / 10); // Grinch steals 1 in 10 cases
    const stolenCases = new Set();
    while (stolenCases.size < stolenCount) {
      const randomCase = Math.floor(Math.random() * totalDays) + 1;
      stolenCases.add(randomCase);
    }
    return Array.from(stolenCases);
  };
  