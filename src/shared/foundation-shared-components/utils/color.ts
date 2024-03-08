export const getPercentageFromHex = (hex: string): number => { 
  return parseInt(hex, 16) / 255;
}

export const getHexFromPercentage = (percentage: number): string => {
  return Math.round(percentage * 255).toString(16).padStart(2, "0");
}
