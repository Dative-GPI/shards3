const asString = (value: any): string => {
  if (value == null) {
    return "";
  }
  switch (typeof value) {
    case "string"  : return value;
    case "boolean" : return value ? '1' : '0';
    case "number"  :
    case "bigint"  :
    case "symbol"  :
    case "function": return value.toString();
    default        : return JSON.stringify(value);
  }
};

export const alphanumericSort = (a: any, b: any) => {
  if (a == null && b == null) {
    return 0;
  }
  if (a == null) {
    return -1;
  }
  if (b == null) {
    return 1;
  }
  a = asString(a).trim();
  b = asString(b).trim();
  return a.localeCompare(b, undefined, { numeric: true });
};