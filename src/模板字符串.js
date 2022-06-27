"use strict";

var v = 'tbl';
var str1 = 'my name is ${v}~'; // 不带换行
// 有换行

var str2 = "\n<h2>\n  my name is ".concat(v, "~\n</h2>\n");