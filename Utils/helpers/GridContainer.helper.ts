export const generateRandomNumberPairs = (gridNumber: number) => {
  const emptyArray: number[] = new Array(gridNumber);
  const baseNumbers: number[] = [];

  for (var i = 0; i < emptyArray.length; i++) {
    baseNumbers.push(i + 1);
  }
  const Numbers: number[] = [...baseNumbers, ...baseNumbers];
  return Numbers;
};

export function generateShuffleNumbers(array: number[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
