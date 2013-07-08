#!/usr/bin/env node
var fs = require('fs');
var outfile = "03.02.hello.txt";
var out = "Example output.\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
 