type Callback = (date: string) => void;
const work = (callback: Callback, ms: number) => {
  setTimeout(() => {
    const now = new Date().toISOString();

    callback(now);
  }, ms);
};

//동기처리
work((date) => {
  console.log(`첫 번째 작업: ${date}`);

  work((date) => {
    console.log(`두 번째 작업: ${date}`);
  }, 1000);
}, 1000);
