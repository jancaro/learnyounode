var fs = require('fs');

function e (path){
 var strBuffer = fs.readFileSync(path).toString();
 if(strBuffer.length == 0){
  return 0;
 } else {
  for (var i=0; i<strBuffer.length-1; i++){
   var arr= strBuffer.split('\n');
  }
  return arr.length-1;
 }
}

console.log(e(process.argv[2]));
