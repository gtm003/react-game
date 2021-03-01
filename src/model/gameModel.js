import { RowModel } from './rowModel';

const ICON_TYPE = ['arabic', 'dots', 'letters', 'roman', 'shapes', 'signs'];
const TIP_TYPE = ['adjacent1', 'adjacent2', 'position', 'oneColumn','open'];
const TIPS_ROW = [['adjacent1', 5, 5, 1, 4], ['adjacent1', 4, 0, 3, 1], ['adjacent2', 1, 0, 0, 1, 4, 2], ['adjacent1', 2, 2, 4, 1], ['adjacent1', 2, 4, 4, 5], ['position', 2, 4, 3, 5], ['position', 2, 4, 0, 5], ['adjacent2', 2, 0, 3, 1, 1, 2], ['adjacent2', 3, 0, 0, 1, 5, 2], ['adjacent1', 1, 0, 1, 1], ['adjacent1', 5, 1, 1, 2], ['adjacent1', 1, 2, 0, 3], ['adjacent1', 4, 1, 2, 0], ['adjacent2', 5, 4, 3, 3, 4, 2], ['adjacent2', 0, 0, 2, 1, 5, 2], ['adjacent2', 5, 2, 3, 3, 3, 4], ['position', 1, 3, 3, 4], ['adjacent2', 0, 1, 3, 2, 2, 3]];
const TIPS_COLUMN = [['oneColumn', 4, 5, 3, 5], ['oneColumn', 3, 3, 5, 3], ['oneColumn', 0, 4, 4, 4]]
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

const getRandomInteger = (m, n) => {
  const result = Math.round(Math.random() * (n - m) + m);
  return result;
};

const getRandomSignNumber = () => {
  const randomNumber = Math.random() - 0.5;
  return Math.round(Math.abs(randomNumber) / randomNumber);
}

export class GameModel {
  constructor(quantityCell) {
    this.quantityCell = quantityCell;
    this.field = this.getField(this.quantityCell);
    this.tipsRow = this.formatTips(TIPS_ROW);
    this.tipsColumn = this.formatTips(TIPS_COLUMN);
  }

  getField(n) {
    const arr = getOderArr(n);
    return arr.map(item => item = new RowModel(n));
  }

  getCells() {
    let arr = [];
    for (let i = 1; i < this.quantityCell + 1; i += 1) {
      const content = getRandomOderArr(this.quantityCell);
      for (let j = 1; j < this.quantityCell + 1; j += 1)
      {
       let obj = {
         index : (i - 1) * this.quantityCell + (j - 1), 
         row : `${ICON_TYPE[i - 1]}`,
         column: `${j}`,
         content: getOderArr(this.quantityCell),
         solve: content[j - 1],
         removeGuess : 0,
         opened: false,
       }
       arr.push(obj);
     }
    }
    return arr;
  }

  getGuessNumber(arrGuessColumn, solve) {
    let arrGuessNumber = [];
    for (let i = 1; i < this.quantityCell + 1; i += 1) {
      let setGuessNumber = new Set();
      arrGuessColumn.forEach((item, index) => {
        if (item.has(i)) setGuessNumber.add(solve[index]);
      })
      arrGuessNumber.push(setGuessNumber);
    }
    return arrGuessNumber;
  }

  removeGuess(indexRow, indexColumn, value) {
    const row = this.field[indexRow];
    if (row.solve[indexColumn] === value) {
      //console.log('error remove');
    } 
    const indexSolve = row.solve.indexOf(value);
    row.guessColumn[indexSolve].delete(indexColumn + 1);
    row.guessNumber = this.getGuessNumber(row.guessColumn, row.solve);
    row.guessNumber = this.getGuessNumber(row.guessColumn, row.solve);
    this.checkSingleGuess(indexRow);
  }

  openCell(indexRow, indexColumn, value) {
    const row = this.field[indexRow];
    if (row.solve[indexColumn] !== value) {
      //console.log('error open');
    }
    const indexSolve = row.solve.indexOf(value);
    row.guessColumn.map((item, index) => {
      if (index !== indexSolve) {
        item.delete(indexColumn + 1);
      }
      else {
        item.clear();
        item.add(indexColumn + 1);
      }
    });
    row.opened[indexColumn] = true;
    row.guessNumber = this.getGuessNumber(row.guessColumn, row.solve);
    this.checkSingleGuess(indexRow);
  }

  isNewOpened(indexRow) {
    const row = this.field[indexRow];
    const guessColumnNotOpened = row.guessColumn.filter((item, index) => !row.opened[index]);
    const guessNumberNotOpened = row.guessNumber.filter((item, index) => !row.opened[index]);
    return (guessColumnNotOpened.some(item => item.size === 1) || guessNumberNotOpened.some(item => item.size === 1));
  }

  checkSingleGuess(indexRow) {
    const row = this.field[indexRow];
    while(this.isNewOpened(indexRow)) {
      const guessColumnNotOpened = row.guessColumn.filter((item, index) => !row.opened[index]);
      const guessNumberNotOpened = row.guessNumber.filter((item, index) => !row.opened[index]);
      let indexSolvedCell = row.guessColumn.findIndex((item, index) => item.size === 1 && !row.opened[index]);
      if (indexSolvedCell !== -1) {
        row.guessColumn.map((item, index) => {
          if (index !== indexSolvedCell) {
            item.delete(indexSolvedCell + 1);
            row.opened[indexSolvedCell] = true;
          }
        })
        row.guessNumber = this.getGuessNumber(row.guessColumn, row.solve);
      } else {
        indexSolvedCell = row.guessNumber.findIndex((item, index) => item.size === 1 && !row.opened[index]);
        const iterator = row.guessNumber[indexSolvedCell].values();
        const cellValue = iterator.next().value;
        const indexSolve = row.solve.indexOf(cellValue);
        row.guessColumn[indexSolve].clear();
        row.guessColumn[indexSolve].add(indexSolvedCell + 1);
        row.opened[indexSolvedCell] = true;
        row.guessNumber = this.getGuessNumber(row.guessColumn, row.solve);
      }
    }
  }
  
  getTipType(m, n) {
    return TIP_TYPE[getRandomInteger(m, n)];
  }

  formatTips(typesArr) {
    const arr = [];
    typesArr.forEach(item => {
      let obj = {
        hidden: false,
        type: item[0],
        arr: [
          {
            row: ICON_TYPE[item[1]],
            column: item[2],
            solve: this.field[item[1]].solve[item[2]],
          },
          {
            row: ICON_TYPE[item[3]],
            column: item[4],
            solve: this.field[item[3]].solve[item[4]],
          }
        ]
      }
      if (item.length === 7) {
        obj.arr.push({
          row: ICON_TYPE[item[5]],
          column: item[6],
          solve: this.field[item[5]].solve[item[6]],
        })
      }
      arr.push(obj);
    })
    return arr;
  }

  getTip () {
    const type = this.getTipType(0, TIP_TYPE.length - 4);
    const indexRow1 = getRandomInteger(0, this.quantityCell - 1);
    const indexColumn1 = getRandomInteger(0, this.quantityCell - 1);
    const randomRow1 = this.field[indexRow1];
    const tipCell1 = {
      row : ICON_TYPE[indexRow1],
      column: indexColumn1,
      solve: randomRow1.solve[indexColumn1],
    }
    let tipCell = [];
    if (type === 'open') {
      this.openCell(indexRow1, indexColumn1, tipCell1.solve);
    }

    if (type === 'adjacent1') {
      let direction;
      if (indexColumn1 === 0) direction = 1
      else if (indexColumn1 === 5) direction = -1
      else direction = getRandomSignNumber();
      const indexRow2 = getRandomInteger(0, this.quantityCell - 1);
      const randomRow2 = this.field[indexRow2];
      const tipCell2 = {
        row : ICON_TYPE[indexRow2],
        column: indexColumn1 + direction,
        solve: randomRow2.solve[indexColumn1 + direction],
      };
      tipCell.push(tipCell1, tipCell2);
    }

    if (type === 'adjacent2') {
      let direction;
      if (indexColumn1 < 2) direction = 1
      else if (indexColumn1 > 3) direction = -1
      else direction = getRandomSignNumber();
      const indexRow2 = getRandomInteger(0, this.quantityCell - 1);
      const randomRow2 = this.field[indexRow2];
      const tipCell2 = {
        row : ICON_TYPE[indexRow2],
        column: indexColumn1 + direction,
        solve: randomRow2.solve[indexColumn1 + direction],
      };
      const indexRow3 = getRandomInteger(0, this.quantityCell - 1);
      const randomRow3 = this.field[indexRow3];
      const tipCell3 = {
        row : ICON_TYPE[indexRow3],
        column: indexColumn1 + 2 * direction,
        solve: randomRow3.solve[indexColumn1 + 2 * direction],
      };
      tipCell.push(tipCell1, tipCell2, tipCell3);
    }
    
    if (type === 'position') {
      const indexRow2 = getRandomInteger(0, this.quantityCell - 1);
      const indexColumn2 = getRandomInteger(0, this.quantityCell - 1);
      const randomRow2 = this.field[indexRow2];
      const tipCell2 = {
        row : ICON_TYPE[indexRow2],
        column: indexColumn2,
        solve: randomRow2.solve[indexColumn2],
      };
      if (indexColumn1 < indexColumn2) {
        tipCell.push(tipCell1, tipCell2);
      } else {
        tipCell.push(tipCell2, tipCell1);        
      }
    }
    return {
      type : type,
      arr : tipCell,
    };
  };

  getTips() {
    const arr = [];
    for (let i = 0; i < 18; i += 1) {
      arr.push(this.getTip());
    }
    return arr;
  }

  isVictory() {
    let isVictory = true;
    this.field.forEach(row => {
      if (row.opened.includes(false))
      isVictory =false;
    })
    return isVictory;
  }

  checkTip(tip) {
    console.log(tip);
    switch(tip.type) {
      case 'position':
        const item1 = tip.arr[0];
        const item2 = tip.arr[1];
        const row1 = item1.row;
        const row2 = item2.row;
        //guess1 = this.guess.filter
        break;

    }
  }

  autoGame() {
    const guess = this.getCells();
    this.tips.push(this.getTip());
  }

  checkEvent(event, currentIcon, value) {
    switch(event) {
      case 'onContextMenu':

    }
  }
}
