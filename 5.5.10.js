
	function show(op){
		document.getElementById('display').innerHTML = op;
	}

	function save(){

	sum1 = document.getElementById('display').innerHTML;
	document.getElementById('display').innerHTML = "";
	}

	function adder(){
	sum2 = document.getElementById('display').innerHTML;
	resultado = parseInt(sum1)||parseInt(sum2);
	document.getElementById('display').innerHTML = resultado;
	}

