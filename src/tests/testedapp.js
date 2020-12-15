export const add = (x, y) => x + y;

export const total = (subTotal, shipping) => {
  return '$' + add(subTotal, shipping);
};
