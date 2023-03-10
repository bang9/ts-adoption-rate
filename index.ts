import { glob } from 'glob';

const [, , path] = process.argv;

async function run() {
  const [tsfiles, jsfiles] = await Promise.all([glob(`${path}/**/*.{ts,tsx}`), glob(`${path}/**/*.{js,jsx}`)]);

  console.log(`total ts files: ${tsfiles.length}`);
  console.log(`total js files: ${jsfiles.length}`);

  const total = tsfiles.length + jsfiles.length;

  console.log('--------------------------------');
  console.log(`ts adoption rate: ${(tsfiles.length / total) * 100}%\n`);
}

run();
