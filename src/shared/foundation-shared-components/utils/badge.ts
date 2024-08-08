export const getBadgeFromNumber = (value: number, parenthesis: boolean = false): string => {
  if (value < 1) {
    return "";
  }
  if (value > 99) {
    return `${parenthesis ? '(' : ''}99+${parenthesis ? ')' : ''}`;
  }
  return `${parenthesis ? '(' : ''}${value.toString()}${parenthesis ? ')' : ''}`;
}