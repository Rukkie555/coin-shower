function myAmount(){
  var amount = document.getElementById("amount").value;
  var k1 = document.getElementById("1k");
  var k2 = document.getElementById("2k");
  var k5 = document.getElementById("5k");
  var k10 = document.getElementById("10k");
  var k20 = document.getElementById("20k");
  var k50 = document.getElementById("50k");
  var k100 = document.getElementById("100k");
  var k200 = document.getElementById("200k");
  var p = document.getElementById("p");
  
  if(amount <= 0 && " "){
    alert("Please enter an amount");
  }

  else if(amount <= 1){
    k1.style.display = "block";
  }

  else if(amount <= 2){
    k1.style.display = "block",
    k2.style.display = "block";
  }

  else if(amount <= 5){
    k1.style.display = "block",
    k2.style.display = "block",
    k5.style.display = "block";
  }

  else if(amount <= 10){
    k1.style.display = "none",

    k5.style.display = "block",
    k10.style.display = "block";
  }

  else if(amount <= 20){
    k5.style.display = "none",

    k5.style.display = "block",
    k10.style.display = "block",
    k20.style.display = "block";
  }

  else if(amount <= 50){
    k10.style.display = "block",
    k20.style.display = "block",
    k50.style.display = "block";
  }

  else if(amount <= 100){
    k10.style.display = "none",

    k20.style.display = "block",
    k50.style.display = "block",
    k100.style.display = "block";
  }

  else if(amount <= 200){

    k20.style.display = "block",
    k50.style.display = "block",
    k100.style.display = "block",
    k200.style.display = "block";
  }

  else if(amount > 200){
    alert("Amount is not available");
  }
}