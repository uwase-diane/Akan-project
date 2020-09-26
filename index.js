
var result;
var dd;
var mm;
var shortYear;
var shortCentry;
var numberOfDay;

var maleAkanNames = ["Kwasi","Kwadwo", "Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleAkanNames = ["Akosua","Adwoa","Abenaa", "Akua","Yaa","Afua","Ama"];


function calculateAkanDay(){

year = document.getElementById("year").value;
shortYear = year.substr(2);
shortCentry = year.substr(0, 2);
mm = document.getElementById("month").value;
dd = document.getElementById("date").value;

result = (((shortCentry/4) -2 * shortCentry-1) + ((5 * shortYear/4)) + (26 * (mm + 1)/10) + dd) % 7;

console.log(Math.floor(result));
   
}
function genderFunction(){
     if(document.getElementById("radioFemale").checked){
            var gender = "female";
     }
  
         else if (document.getElementById("radioMale").checked){
            var gender = "male";
         }else{

           return false;
         }
        
        
         switch(gender){
            case "female":
          if(numberOfDay == 1){
            alert("your Akan name is" +femaleAkanNames[0]);
          }
          else if(numberOfDay == 2){
            alert("your Akan name is " +femaleAkanNames[1]);
          }
          else if(numberOfDay == 3){
            alert("your Akan name is " +femaleAkanNames[2]);
          }
          else if (numberOfDay == 4){
            alert("your Akan name is " +femaleAkanNames[3]);
          }
          else if (numberOfDay == 5){
            alert("your Akan name is " +femaleAkanNames[4]);
          }
          else if (numberOfDay == 6){
            alert("your Akan name is " +femaleAkanNames[5]);
          }
          else if (numberOfDay == 7){
            alert("your Akan name is " +femaleAkanNames[6]);
          }
          break;
          case "male":
            if(numberOfDay == 1){
              alert("your Akan name is" +maleAkanNames[0]);
            }
            else if(numberOfDay == 2){
              alert("your Akan name is " +maleAkanNames[1]);
            }
            else if(numberOfDay == 3){
              alert("your Akan name is " +maleAkanNames[2]);
            }
            else if (numberOfDay == 4){
              alert("your Akan name is " +maleAkanNames[3]);
            }
            else if (numberOfDay == 5){
              alert("your Akan name is " +maleAkanNames[4]);
            }
            else if (numberOfDay == 6){
              alert("your Akan name is " +maleAkanNames[5]);
            }
            else if (numberOfDay == 7){
              alert("your Akan name is " +maleAkanNames[6]);
            }
            break
            default:

          }

  }
  function akanName(){
    numberOfDay = Math.floor(calculateAkanDay());
    genderFunction();
 
  }