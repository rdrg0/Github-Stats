export const groupByThreeDigits = (number) => {
  return `${number}`.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
};
