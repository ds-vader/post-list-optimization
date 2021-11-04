export const hardLoader = (n) => {
  setTimeout(() => {
    for (let i = 0; i < n; i++) {
      setTimeout(() => {
        for (let j = 0; j < 100; j++) {
          console.log(Math.floor(Math.random() * 101));
        }
      }, 0);
    }
  }, 0);
};
