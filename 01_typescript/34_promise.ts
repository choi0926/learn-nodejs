const work = (ms: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const now = new Date().toISOString();

      resolve(now);
      // reject(new Error('Error Message'));
    }, ms);
  });
};

work(1000)
  .then((date) => {
    console.log(`첫 번째 작업: ${date}`);

    return work(1000);
  })
  .then((date) => {
    console.log(`두 번째 작업: ${date}`);
  })
  .catch((err) => {
    console.error(err);
  });
