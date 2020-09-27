
var result;
var dd;
var mm;
var shortYear;
var shortCentry;

//CALCULATING DAY 

function calculateAkanDay(){

year = document.getElementById("year").value;
shortYear = year.substr(2);
shortCentry = year.substr(0, 2);
mm = document.getElementById("month").value;
dd = document.getElementById("date").value;

result = (((shortCentry/4) -2 * shortCentry-1) + ((5 * shortYear/4)) + (26 * (mm + 1)/10) + dd) % 7;

result = Math.floor(result);

//NANIMG CONDITION
var genders = document.getElementById("gender").value;
   if(genders == "female"){
       var akanNames;
       if(result == 7){
        akanNames = "Akosua";
       }else if(result == 1){
        akanNames = "Adwoa";
       }else if(result == 2){
        akanNames = "Abenaa";
       }else if (result == 3){
        akanNames = "Akua";
       }else if(result == 4){
        akanNames = "Yaa";

       }else if(result == 5){
        akanNames = "Afua";
       }else if (result == 6){
        akanNames = "Ama";
       }
   }
   if(genders == "male"){
    var akanNames;
    if(result == 7){
      akanNames = "Ama";
    }else if(result == 1){
      akanNames = "Kwadwo";
    }else if(result == 2){
      akanNames = "Kwabena";
    }else if (result == 3){
      akanNames = "Kwaku";
    }else if(result == 4){
      akanNames = "Yaw";

    }else if(result == 5){
      akanNames = "Kofi";
    }else if (result == 6){
      akanNames = "Kwame";
    }
}
//VALIDATION CONDITION

if(dd <= 0 || dd > 31){
  alert("invalid date, please go back and fill a proper date ");
}else if (mm <=0 || mm > 31){
  alert("invalif month ,please go back and fill a proper Month ");
}


document.getElementById("demo").innerHTML = alert("your akan is " + akanNames);

}



