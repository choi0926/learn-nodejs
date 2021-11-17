const sum = (...args: number[]) => {
  let result = 0;
  args.forEach((arg) => {
    result += arg;
  });
  return result;
};

const result = sum(1, 2, 3, 4, 5);

console.log(result);
