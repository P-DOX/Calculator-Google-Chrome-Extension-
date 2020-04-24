document.addEventListener('DOMContentLoaded', function() {

let button0 = document.getElementById('b0');
let button1 = document.getElementById('b1');
let button2 = document.getElementById('b2');
let button3 = document.getElementById('b3');
let button4 = document.getElementById('b4');
let button5 = document.getElementById('b5');
let button6 = document.getElementById('b6');
let button7 = document.getElementById('b7');
let button8 = document.getElementById('b8');
let button9 = document.getElementById('b9');
let buttonP = document.getElementById('b.');

let button_add = document.getElementById('b+');
let button_sub = document.getElementById('b-');
let button_mul = document.getElementById('b*');
let button_div = document.getElementById('b/');
let button_equ = document.getElementById('b=');
let button_clr = document.getElementById('clear');


var num1=0.0,num2=0.0;
var sign = "";

button_add.addEventListener('click', function() {
	var n1=document.getElementById("ans").value;
	num1 = parseFloat(n1);
	sign="+";
	document.getElementById("ans").value = "";
   });

button_sub.addEventListener('click', function() {
	var n1=document.getElementById("ans").value;
	num1 = parseFloat(n1);
	sign="-";
	document.getElementById("ans").value = "";
   });

button_mul.addEventListener('click', function() {
	var n1=document.getElementById("ans").value;
	num1 = parseFloat(n1);
	sign="*";
	document.getElementById("ans").value = "";
   });

button_div.addEventListener('click', function() {
	var n1=document.getElementById("ans").value;
	num1 = parseFloat(n1);
	sign="/";
	document.getElementById("ans").value = "";
   });

button_equ.addEventListener('click', function() {
	var n2=document.getElementById("ans").value;
	num2 = parseFloat(n2);
	if(sign == "+")
		num2 = num2 + num1;
	else if(sign == "-")
		num2 = num1 - num2;
	else if(sign == "*")
		num2 = num2 * num1;
	else 
		num2 = num1/num2;

	document.getElementById("ans").value = num2;
   });

button_clr.addEventListener('click', function() {
	num1=0.0;
	num2=0.0;
	document.getElementById("ans").value = "";
   });



button0.addEventListener('click', function() {
	var str=document.getElementById("ans").value;
	str=str+"0";
	document.getElementById("ans").value = str;
   });

button1.addEventListener('click', function() {
	var str=document.getElementById("ans").value;
	str=str+"1";
	document.getElementById("ans").value = str;
	       });

button2.addEventListener('click', function() {
	var str=document.getElementById("ans").value;
	str=str+"2";
	document.getElementById("ans").value = str;
       });

button3.addEventListener('click', function() {
	var str=document.getElementById("ans").value;
	str=str+"3";
	document.getElementById("ans").value = str;
   });

button4.addEventListener('click', function() {
	var str=document.getElementById("ans").value;
	str=str+"4";
	document.getElementById("ans").value = str;
   });

button5.addEventListener('click', function() {
	var str=document.getElementById("ans").value;
	str=str+"5";
	document.getElementById("ans").value = str;
   });

button6.addEventListener('click', function() {
	var str=document.getElementById("ans").value;
	str=str+"6";
	document.getElementById("ans").value = str;
   });

button7.addEventListener('click', function() {
	var str=document.getElementById("ans").value;
	str=str+"7";
	document.getElementById("ans").value = str;
   });

button8.addEventListener('click', function() {
	var str=document.getElementById("ans").value;
	str=str+"8";
	document.getElementById("ans").value = str;
   });

button9.addEventListener('click', function() {
	var str=document.getElementById("ans").value;
	str=str+"9";
	document.getElementById("ans").value = str;
   });

buttonP.addEventListener('click', function() {
	var str=document.getElementById("ans").value;
	str=str+".";
	document.getElementById("ans").value = str;
   });


});