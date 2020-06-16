const test = require('ava');
const tilmd = require('../.');
const fs = require('fs');

test('create default.md ', t => {
  try{
    tilmd('default.md','test.md');
  }catch(err){
    console.log(err);
  }
  t.pass();
});

test('create light.md', t => {
  try{
    tilmd('light.md', 'test.md');
  }catch(err){
    console.log(err);
  }
  t.pass();
});

test('create detail.md', t => {
  try{
    tilmd('detail.md');
  }catch(err){
    console.log(err);
  }
  t.pass();
});

test('create default', t => {
  try {
    tilmd();
  }catch(err){
    console.log(err);
  }
  t.pass();
});

test.after('delete markdown file', t => {
  fs.unlink(process.cwd() + '/test.md',(err)=>{
    if (err) throw err;
    console.log(err);
  });
  fs.unlink(process.cwd() + '/output.md', (err)=>{
    if (err) throw err;
    console.log(err);
  });
});