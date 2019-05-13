function dabout(aboutmain) {
    var x = document.getElementById(aboutmain);
    console.log("works");
    if (x.style.display == "block") {
      x.style.display = "none";
    } 
    else{
        x.style.display = "block";
    }
  }


  function dwork() {
    var x = document.getElementById("worktext");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else{
        x.style.display = "none";
    }
  }


  function doffer() {
    var x = document.getElementById("offertext");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else{
        x.style.display = "none";
    }
  }


  function dbenefit() {
    var x = document.getElementById("benefittext");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else{
        x.style.display = "none";
    }
  }