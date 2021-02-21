const ICON_TYPE = ['arabic', 'dots', 'letters', 'roman', 'shapes', 'signs'];
const TIP_TYPE = ['open','adjacent1', 'adjacent2', 'position'];

const getOderArr = (n) => {
  let arr = [];
  Array(n).fill(1).forEach((item, index) => arr.push(index + 1));
  return arr;
};

function getRandomOderArr(n) {
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

export const getIcons = (n) => {
  let arr = [];
  for (let i = 1; i < n + 1; i += 1)
  for (let j = 1; j < n + 1; j += 1)
   {
    let obj = {
      id : `${i}${j}`,
      row : `${ICON_TYPE[i - 1]}`,
      column: `${j}`,
      content: getOderArr(n),
      completed: false,
    }
    arr.push(obj);
  }
  return arr;
};

const getTipType = () => {
  return TIP_TYPE[getRandomInteger(0, TIP_TYPE.length - 1)];
}

export const getTip = (arr) => {
  const type = getTipType();
  const index = getRandomInteger(0, arr.length - 1)
  const randomCell = arr[index];
  let tipCell = [randomCell];
  if (type === 'adjacent1') {
    let direction;
    if ((index % 6) === 0) direction = 1
    else if ((index % 6) === 5) direction = -1
    else direction = getRandomSignNumber();
    const indexAdjacent1 = 6 * getRandomInteger(0, Math.sqrt(arr.length) - 1) + (index % 6) + direction;
    console.log(`index: ${index}, ${indexAdjacent1}`);
    tipCell.push(arr[indexAdjacent1]);
  }
  if (type === 'adjacent2') {
    let direction;
    if ((index % 6) < 2) direction = 1
    else if ((index % 6) > 3) direction = -1
    else direction = getRandomSignNumber();
    const indexAdjacent1 = 6 * getRandomInteger(0, Math.sqrt(arr.length) - 1) + (index % 6) + direction;
    const indexAdjacent2 = 6 * getRandomInteger(0, Math.sqrt(arr.length) - 1) + (index % 6) + 2 * direction;
    console.log(`index: ${index}, ${indexAdjacent1}, ${indexAdjacent2}`);
    tipCell.push(arr[indexAdjacent1], arr[indexAdjacent2]);
  }
  if (type === 'position') {
    const indexNew = getRandomInteger(0, arr.length - 1);
    if ((index % 6) < (indexNew % 6)) 
    tipCell = [arr[index], arr[indexNew]]
    else tipCell = [arr[indexNew], arr[index]];
  }
  return {
    type : type,
    arr : tipCell,
  };
};

export const getSolve = (n) => {
  let arr = [];
  for (let i = 1; i < n + 1; i += 1)
  {
    const content = getRandomOderArr(n);
    for (let j = 1; j < n + 1; j += 1)
    {
     let obj = {
       id : `${i}${j}`,
       row : `${ICON_TYPE[i - 1]}`,
       column: `${j}`,
       content: content[j - 1],
     }
     arr.push(obj);
    }
  }
  return arr;
};