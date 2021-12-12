type Callback = (date: string) => void;
const work = (callback: Callback, ms: number) => {
  setTimeout(() => {
    const now = new Date().toISOString();

    callback(now);
  }, ms);
};

//비동기처리
work((date) => {
  console.log(`첫 번째 작업: ${date}`);
}, 1000);

work((date) => {
  console.log(`두 번째 작업: ${date}`);
}, 1000);

//위에 작업은 거의 동시에 실행됨
