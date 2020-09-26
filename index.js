
var result;
var dd;
var mm;
var shortYear;
var shortCentry;
var day;

var days = ["Sunday","Monday","Tuesday","wednesday","thursday","thursday", "Friday","Saturday"];
var maleAkanNames = ["Kwasi","Kwadwo", "Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var femaleAkanNames = ["Akosua","Adwoa","Abenaa", "Akua","Yaa","Afua","Ama"]


function calculateAkanDay(){

year = document.getElementById("year").value;
shortYear = year.substr(2);
shortCentry = year.substr(0, 2);
mm = document.getElementById("month").value;
dd = document.getElementById("date").value;

result = (((shortCentry/4) -2*shortCentry-1) + ((5 * shortYear/4)) + (26 * (mm + 1)/10) + dd) % 7;
console.log(result);

}  

function getGender(){
  var genderF = document.getElementsByName("gender");
  var genderM = document.getElementsByName("gender");
  if(genderF[0].checked == true){
     var gender = "female";
  }
  else if (genderM[1].checked == true){
    var gender = "male";
  }
  else{
    return false;
  }
  switch(gender){
    case "female":
      if(day == 1){
        alert("you were born on " + days[0] + "your Akan name is" +femaleAkanNames[0]);

      }
      else if(day == 2){
        alert("you were born on " + days[1] + "your Akan name is" +femaleAkanNames[1]);
      }
      else if(day == 3){
        alert("you were born on " + days[2] + "your Akan name is" +femaleAkanNames[2]);
      }
      else if(day == 4){
        alert("you were born on " + days[3] + "your Akan name is" +femaleAkanNames[3]);
      }
      else if(day == 5){
        alert("you were born on " + days[4] + "your Akan name is" +femaleAkanNames[4]);
      }
      else if(day == 6){
        alert("you were born on " + days[5] + "your Akan name is" +femaleAkanNames[5]);
      }
      else if(day == 7){
        alert("you were born on " + days[6] + "your Akan name is" +femaleAkanNames[6]);
      }
      break;
      default:
        
  }
}
function saveInformation(){
  day = calculateAkanDay();
  getGender();
}

  