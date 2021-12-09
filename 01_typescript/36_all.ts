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

  const [date1, date2] = await Promise.all([work(1000), work(2000)]); // 제일 긴 시간을 마지막으로 실행 종료

  console.log(`첫 번째 작업 : ${date1}`);
  console.log(`두 번째 작업 : ${date2}`);

  console.log();
  console.timeEnd('걸린 시간');
};

main();
