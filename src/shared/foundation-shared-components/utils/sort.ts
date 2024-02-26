export const alphanumericSort = (a: any, b: any) => {
    if (typeof(a) !== 'string') {
        a = JSON.stringify(a);
    }
    if (typeof(b) !== 'string') {
        b = JSON.stringify(b);
    }
    return a.localeCompare(b, undefined, { numeric: true });
}