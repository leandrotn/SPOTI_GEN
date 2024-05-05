const crypto = require('crypto');
const generateRandomString = (length) => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
for(let i = 0; i < length; i++){
const randomIndex = crypto.randomInt(0, characters.length);
code += characters[randomIndex];
}

  return code;
}


const code = generateRandomString(10);
const url  = `https://www.spotify.com/br-pt/ppt/microsoft/?code=${code}`;
console.log(url);