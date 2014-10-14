var output = 0;

for (i=2; i<process.argv.length; i++ ) { //start as second element, because we can ignore the first two
    output += Number(process.argv[i]);
}

console.log(output);
