export const validateSyllables = (lines, expectedCounts) => {
  const actualCounts = lines.map(line => line.syllables);

  const compareArrays = (a, b) => 
    a.length === b.length &&
      a.every((v, i) => v === b[i]);

  return compareArrays(actualCounts, expectedCounts)
};

