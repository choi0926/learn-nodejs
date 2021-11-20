const outer = () => {
  const a = 10;

  const inner = () => {
    console.log(a);
    // outer에서 선언된 a = 10을 inner에서 사용할 수 있음.
  };
  return inner;
};

const outerFunc = outer();

outerFunc();
