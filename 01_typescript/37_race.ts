type Resolve = (date: String) => void;
// type Reject = (error: Error) => void;

const work = (ms: number) => {
  return new Promise((resolve: Resolve) => {
    setTimeout(() => {
      const now = new Date().toISOString();

      resolve(now);
      //   reject(new Error('Error Message'));
    }, ms);
  });
};

const main = async () => {
  console.time('걸린 시간');

  const startTime = new Date().toISOString();
  console.log(`시작 시간 : ${startTime}`);
  console.log();

  const date = await Promise.race([work(1000), work(2000)]);
  // 가장 먼저 실행이 완료된 결과값

  console.log(`완료된 작업 : ${date}`);

  console.log();
  console.timeEnd('걸린 시간');
};

main();
