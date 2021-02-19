const ICON_TYPE = ['arabic', 'dots', 'letters', 'roman', 'shapes', 'signs'];
export const getIcon = (i,j) => {
  console.log(`../../assets/icons/${ICON_TYPE[i]}/${j}.svg`);
  return `../../assets/icons/${ICON_TYPE[i]}/${j}.svg`;
}