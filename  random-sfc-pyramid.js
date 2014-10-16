var n = 5;
var message = "";
var counter = 0;

while(counter < n){
  message = message + "SFC ";
  counter = counter + 1;
}
console.log(message);
/*
undefined
*/


var nSFC = function(n){
var message = "";
var counter = 0;
 
while(counter < n){
message = message + "SFC ";
counter = counter + 1;
}
return message;
};
 
var sfcPyramid = function(n){
var output;
var row = 1;
while(row <= n){
output= nSFC(row);
console.log(output);
row = row + 1;
}
};
 

var createNumber = function(n){
var tmp = Math.random() * n;
var result = Math.floor(tmp);
return result;
};
 

var sawa = createNumber(100);

sfcPyramid(sawa);
