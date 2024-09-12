export const containsSearchTerm = (obj: any, searchTerm: string): boolean => {
  if (typeof obj !== 'object' || obj === null) {
    return String(obj).toLowerCase().includes(searchTerm);
  }
  if (Array.isArray(obj)) {
    return obj.some(element => containsSearchTerm(element, searchTerm));
  }
  return Object.values(obj).some(value => containsSearchTerm(value, searchTerm));
};

export const filterItems = <T>(items: T[], filter: string): T[] => {
  const searchTerm = filter.toLowerCase();

  return items.filter(item => containsSearchTerm(item, searchTerm));
};
