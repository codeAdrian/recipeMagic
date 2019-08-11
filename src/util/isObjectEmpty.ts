export const isObjectEmpty = (obj: any) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;
