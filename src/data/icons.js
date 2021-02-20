const ICON_TYPE = ['arabic', 'dots', 'letters', 'roman', 'shapes', 'signs'];
export const getIcons = (n) => {
  let arr = [];
  for (let i = 1; i < n + 1; i += 1)
  for (let j = 1; j < n + 1; j += 1)
   {
    let obj = {
      id : `${i}${j}`,
      row : `${ICON_TYPE[i - 1]}`,
      column: `${j}`,
    }
    arr.push(obj);
  }
  return arr;
}