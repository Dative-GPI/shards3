/**
 * Get the percentage of a color from a hex value
 * @param hex Hexadecimal two digit value between 00 and FF (0 and 255)
 * @returns Value between 0 and 1
 */
export const getPercentageFromHex = (hex: string) => { 
  return parseInt(hex, 16) / 255;
}

/**
 * Get the hex value from a percentage
 * @param percentage Value between 0 and 1
 * @returns Hexadecimal two digit value between 00 and FF (0 and 255)
 */
export const getHexFromPercentage = (percentage: number): string => {
  return Math.round(percentage * 255).toString(16);
}
