const express = require('express');
const chalk = require('chalk')
const app = express();

// 'use strict';
const util = require('util')
    // obj = /*Long and complex object*/;

// console.log(util.inspect(obj, {depth: null}));




app.listen(3000, function(){
  console.log(chalk.red('hey there! you are at port 3000'))
})

app.use('/', function(req, res, next){
  console.log(chalk.orange(req.method, req.url))
  next();
})

app.get('/', function(req, res){
  // console.log(req.method, req.url);
  res.send('whatup')
});

app.get('/is-anybody-in-there', function(req, res, next) {
  // console.log(req.method, req.url, 200)
  res.send('hey back');
})

app.post('/modernism', function(req, res, next) {
  // console.log(req.method, req.url)
})
app.get('/news', function(req, res, next) {
  // console.log('i got a uri that says fake - ok');
  res.send('hey fake news');
})

let allAppProperties = Object.keys(app);
let allAppValues = allAppProperties.map(function(key){
  return app[key]
})
console.log('incoming message hopefully not undefined idx', allAppValues.indexOf('IncomingMessage'))

console.log(util.inspect(app, {depth: null}));
// console.log('typeof app', typeof app);
// console.log('app properties..', allAppProperties);
// console.log('app values..', allAppValues)
