var {QuryMysql} = require('./qury-mysql');
var clc = require('cli-color');

var str = new QuryMysql('user');
str.select(['username','password']).orderBy(['datetime']).where('id','=',8011);

console.log(clc.greenBright(str.toSql));
