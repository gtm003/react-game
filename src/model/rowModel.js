const getOderArr = (n) => {
  let arr = [];
  Array(n).fill(1).forEach((item, index) => arr.push(index + 1));
  return arr;
};

const getRandomOderArr = (n) => {
  let array = getOderArr(n);
  for (let i = n - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export class RowModel {
  constructor(quantityCell) {
    this.quantityCell = quantityCell;
    this.solve = getRandomOderArr(this.quantityCell);
    this.guessColumn = this.getGuessColumn(this.quantityCell);
    this.guessNumber = this.getGuessNumber(this.guessColumn);
    this.opened = new Array(6).fill(false);
  }
  getGuessColumn(n) {
    const arr = [];
    for (let i = 0; i < n; i += 1) {
      const set = new Set(getOderArr(n));
      arr.push(set);
    }
    return arr;
  }

  getGuessNumber(arrGuessColumn) {
    let arrGuessNumber = [];
    for (let i = 1; i < this.quantityCell + 1; i += 1) {
      let setGuessNumber = new Set();
      arrGuessColumn.forEach((item, index) => {
        if (item.has(i)) setGuessNumber.add(index + 1);
      })
      arrGuessNumber.push(setGuessNumber);
    }
    return arrGuessNumber;
  }
}