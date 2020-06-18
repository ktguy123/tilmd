const fs = require('fs');
const path = require('path');

module.exports = function (inFileMd = 'default.md', outFileMd = 'output.md') {
	const data = fs.readFileSync(path.join(__dirname, 'lib', inFileMd), 'utf8');
	fs.writeFileSync(path.join(process.cwd(), outFileMd), data, 'utf8');
};
