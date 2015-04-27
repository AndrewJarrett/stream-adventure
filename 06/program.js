var concat = require('concat-stream');

process.stdin
	.pipe(concat(function (buf) {
		var bufArr = [];
		for (var i = 0; i < buf.length; i++) {
			bufArr[i] = String.fromCharCode(buf[i]);
		}
		console.log(bufArr.reverse().join(''));
	}));
