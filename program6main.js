var mymodule = require('./program6.js')

function presentar(error, array){
 if(error != null) return console.log(error)
 for(var i=0; i<array.length; i++){
  console.log(array[i])
 }
}
mymodule(process.argv[2],process.argv[3],presentar)
