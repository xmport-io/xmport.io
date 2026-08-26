const fs = require('fs');

const rawJsonStr = fs.readFileSync('raw_lottie.json', 'utf8');
const processed = rawJsonStr.replace(/0\.6235294117647059,\s*1\.0,\s*0\.09803921568627451,\s*1\.0/g, '0.0, 0.0, 0.0, 1.0')
  .replace(/0\.6235294117647059,\s*1,\s*0\.09803921568627451,\s*1/g, '0.0, 0.0, 0.0, 1.0');

fs.writeFileSync('src/data/squareVectorLottie.json', processed);
console.log('Processed Lottie JSON successfully saved.');
