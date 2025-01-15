const MinusOperator = "-";

// Matches one of the three operators (+, *, /) or the - operator if it is preceded by something that is not another operator
const operatorsRegex = new RegExp(/[\+\*\/]|(?<=.)(?<![-\+\*\/])[-]/gm);

// Matches a nested block of parenthesis
const parenthesisRegex = new RegExp(/\([^)(]+\)/gm);

// Match a positive decimal number
const decimalRegex = new RegExp(/^\d+(.\d+)?$/gm);

const validateBlock = (block: string, operands: string[] = [], variables: string[] = []) => {
  // Remove parenthesis from the block
  block = block.replaceAll("(", "").replaceAll(")", "");

  // Split block on operators (Leave negative signs)
  const components = block.split(operatorsRegex);

  // Check if each bit is a valid operand
  for (let i = 0; i < components.length; i++) {
    // Remove negative sign
    if (components[i].startsWith(MinusOperator)) {
        components[i] = components[i].substring(1);
    }
    if (!operands.includes(components[i]) && !variables.includes(components[i]) && !components[i].match(decimalRegex)) {
        return false;
    }
  }
  return true;
}

export const validateOperation = (rawOperation: string, operands: string[] = [], variables: string[] = []) => {
  // Remove spaces
  let operation = rawOperation.replaceAll(" ", "");

  // Check parenthesis
  const parenthesis: number[] = [];

  for (let i = 0; i < operation.length; i++) {
    if (operation[i] == '(') {
      parenthesis.push(i);
    }
    else if (operation[i] == ')') {
      if (parenthesis.length > 0) {
        if (i == parenthesis.pop()! + 1) {
          return false;
        }
      }
      else {
        return false;
      }
    }
  }
  if (parenthesis.length > 0) {
    return false;
  }

  // Check each block between parenthesis
  let match = operation.match(parenthesisRegex);

  while (match?.[0]) {
    if (!validateBlock(match[0], operands, variables)) {
      return false;
    }
    operation = operation.replace(match[0], "1");
    match = operation.match(parenthesisRegex);
  }
  return validateBlock(operation, operands, variables);
}