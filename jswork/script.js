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


