﻿﻿function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; }  


function g()
{
alert( "Живо на горку!!!:-)" );;
 
}

function g1()
{
alert( "Ваш рост привешает норму. Вам на горку нельзя" );;
 
}




