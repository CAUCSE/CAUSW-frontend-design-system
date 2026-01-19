export const convertPxToRem = (value?: number) => {
  if (value == null) return;
  return `${value / 16}rem`;
};
