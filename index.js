const fs = require('fs');

module.exports = function(inFile_md = "default.md", outFile_md = "output.md") {    
  const data = fs.readFileSync(__dirname + "/template/"+ inFile_md, 'utf8'); 
  fs.writeFileSync(process.cwd() + '/' + outFile_md, data, 'utf8');
}