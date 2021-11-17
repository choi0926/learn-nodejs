const outer = () => {
  const a = 10;

  const inner = () => {
    console.log(a);
    // 메모리에서 a를 사용할 수 있다.
  };
  return inner;
};

const outerFunc = outer();

outerFunc();
