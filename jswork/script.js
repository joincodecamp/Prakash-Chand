//var getmonth = getMonth();
//var color = document.getElementById("month").style.color = "red";
const d = new Date();
let month = d.getMonth();

document.getElementById("d").innerHTML = d;  

if (month == 0) {
    document.getElementById("month").style.color = "red";
    //alert('ddfknsb');
} else if (month == 1) {
    document.getElementById("month2").style.color = "red";
}else if (month == 2) {
    document.getElementById("month3").style.color = "red"; 
}else if (month == 3) {
    document.getElementById("month4").style.color = "red";
}else if (month == 4) {
    document.getElementById("month5").style.color = "red";
}else if (month == 5) {
    document.getElementById("month6").style.color = "red";
}else if (month == 6) {
    document.getElementById("month7").style.color = "red";
}else if (month == 7) {
    document.getElementById("month8").style.color = "red";
}else if (month == 8) {
    document.getElementById("month9").style.color = "red";
}else if (month == 9) {
    document.getElementById("month10").style.color = "red";
}else if (month == 10) {
    document.getElementById("month11").style.color = "red";
}else if (month == 11) {
    document.getElementById("month12").style.color = "red";
}

//array
var setMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("lmonth").innerHTML = setMonth[5];


//menus
var none = 'none';
var block = 'block';

function myClick() {
    document.getElementById("click1").style.display = block;
    document.getElementById("click2").style.display = none;
    document.getElementById("click3").style.display = none;
  }
  function myClick1() {
    document.getElementById("click1").style.display = none;
    document.getElementById("click3").style.display = none;
    document.getElementById("click2").style.display = block;
  }
  function myClick2() {
    document.getElementById("click1").style.display = none;
    document.getElementById("click2").style.display = none;
    document.getElementById("click3").style.display = block;
  }


  //form validation
//   function textEmpty(show) {
//     show.style.borderColor = 'red';
//     show.style.borderStyle = 'solid';
//   }
//   function textSet(show) {
//     show.style.borderColor = '';
//   }
 
  //form
  function submitF() {
    // var x = document.getElementById("sform").elements.length;
    // //document.getElementById("demo").innerHTML = "Found " + x + " elements in the form.";

    var formName = document.forms["pcform"]["fname"].value;
    var formEmail = document.forms["pcform"]["email"].value;
    if (formName == "" || formEmail == "") {
        
        alert("All fields must be entered.");
        document.getElementById("sform").classList.add("error");
      fillit = "All fields must be entered.";
      document.getElementById("fillit1").innerHTML = fillit;
      document.getElementById("fillit2").innerHTML = fillit;    
      return false;
    }else {
        document.getElementById("sform").classList.remove("error");
    }

    return true;
  }