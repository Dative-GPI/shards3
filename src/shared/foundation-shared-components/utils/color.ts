
export const getPercentageFromHex = (hex: string) => { 
  console.log('getPercentageFromHex', hex);
  return parseInt(hex, 16) / 255;
}
