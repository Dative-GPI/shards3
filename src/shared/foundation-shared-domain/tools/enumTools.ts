export const getEnumEntries = (e: any) => {
  return Object.keys(e)
    .filter(key => isNaN(Number(key)))
    .map(key => ({ key: key, value: e[key] }));
};