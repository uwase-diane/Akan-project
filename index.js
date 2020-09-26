
var result;
var dd;
var mm;
var shortYear;
var shortCentry;


function calculateAkanDay(){

year = document.getElementById("year").value;
shortYear = year.substr(2);
shortCentry = year.substr(0, 2);
mm = document.getElementById("month").value;
dd = document.getElementById("date").value;

result = (((shortCentry/4) -2*shortCentry-1) + ((5 * shortYear/4)) + (26 * (mm + 1)/10) + dd) % 7;
console.log(result);
document.getElementById("demo").innerHTML = alert("your akan day is " +(Math.floor(result)));


}  



  