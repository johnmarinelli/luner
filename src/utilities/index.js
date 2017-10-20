export const compareArrays = (a, b) => 
  a.length === b.length &&
    a.every((v, i) => v === b[i]);

export const validateSyllables = (lines, expectedCounts) => {
  const actualCounts = lines.map(line => line.syllables);

  return compareArrays(actualCounts, expectedCounts)
};

