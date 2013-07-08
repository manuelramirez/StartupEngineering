#!/usr/bin/env node

var top = 100;
var arr = [];

var fs = require('fs');
var outfile = "02.Part2.Primes.txt";

var add_element = function(n) {
    for(i=0; i<arr.length+1; i++) {
        if(arr[i] == n) {return -1}
    }
    arr.push(n);
    return 1;
}

var primes = function(n) {
    if(arr.length >= top) {return -1;}
    else {
        var flag = true;
        for(i = 2; i < n; i++) {
            if((n % i) == 0) {
                flag = false;
                break;}
	}
    if(flag == true) {add_element(n)};
    return primes(n+1);
    }
}


// Print to console
var fmt = function(arr) {
    return arr.join(",");
};

var out = fmt(arr);

(primes(2));

var out = fmt(arr);
fs.writeFileSync(outfile, out);
console.log(out);

