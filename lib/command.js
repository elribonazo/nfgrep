exports.nfgrep = function nfgrep(options){
	var exec = require('child_process').exec;
	var child;
	
	if(options.timeout  && options.file){
		

		var comando = "";
		
		comando = "tail " + options.file;
		if(options.filters){
			
			var filtros = options.filters;
			for(i=0;i<filtros.length;++i){
				comando += " | " + filtros[i].command
			}
			
		}
		
		child = exec(comando, { timeout: options.timeout}, function (err, stdout, stdin) {
			if (err) {
				console.log(err);
			}
		});
		return child.stdout;
	}else{
		console.log("Set the timeout and the root folder to execute the command");
	}
}