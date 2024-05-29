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
  if (typeof(a) !== 'string') {
    a = JSON.stringify(a);
  }
  if (typeof(b) !== 'string') {
    b = JSON.stringify(b);
  }
  return a.localeCompare(b, undefined, { numeric: true });
}