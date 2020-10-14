var pares = [];
var impares = [];
var num = function(){
	Math.floor((Math.random() * 100) + 1);
}
if (num % 2 == 0) {
	pares.push(num);
} 
else impares.push(num);
