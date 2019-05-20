var fs = require('fs')
var path = require('path')
var listaDirs = ''
var directorio = fs.readdir(process.argv[2],function callback(error, lista){
 for(var i =0; i<lista.length; i++){
  if(path.extname(lista[i]) == '.'+process.argv[3]){
   listaDirs = listaDirs+lista[i]+'\n'
  }
 }
 console.log(listaDirs.substring(0,listaDirs.length-1))
})
