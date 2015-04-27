var tr = require('through2');
var split = require('split');

var count = 1;
process.stdin
	.pipe(split())
	.pipe(tr(function (line, _, next) {
		if (count % 2 == 0) {
			// even = uppercase
			console.log(line.toString().toUpperCase());
		}
		else {
			// odd = lowercase
			console.log(line.toString().toLowerCase());
		}
		count++;
		next();
	}))
	.pipe(process.stdout);
