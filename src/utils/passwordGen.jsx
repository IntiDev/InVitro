const passwordGen = () => {
  let pass = '';
  const str =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 8; i++) {
    const char = Math.floor(Math.random() * str.length + 1);

    pass += str.charAt(char);
  }

  return pass;
};

export default passwordGen;
