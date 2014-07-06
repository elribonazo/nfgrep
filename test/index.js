var nfgrep = require("../index");


var options ={
	"timeout": 15000,
	"file":"/Users/ribo/nfgrep/test/testfolder/socios.sath",
	"filters":[
	     { "command":"grep -e 'idusuario:1;'" }
	]	
};

var matches = nfgrep.nfgrep(options);
matches.on('data',function(datos){
	console.log(datos);
});