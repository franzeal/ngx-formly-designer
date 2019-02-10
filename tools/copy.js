const fs = require('fs');
const args = process.argv.slice(2);
fs.copyFileSync(args[0], args[1]);