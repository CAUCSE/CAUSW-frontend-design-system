export const convertPxToRem = (value?: number) => {
  if (!value) return;
  return `${value / 16}rem`;
};
