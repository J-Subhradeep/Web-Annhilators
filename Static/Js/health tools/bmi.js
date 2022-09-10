// var age = document.getElementById("age");
// var height = document.getElementById("height");
// var weight = document.getElementById("weight");
// var male = document.getElementById("m");
// var female = document.getElementById("f");
// var form = document.getElementById("form");

function validateForm(){
  var age = document.getElementById("age").value;
var height = document.getElementById("height").value;
var weight = document.getElementById("weight").value;
var male = document.getElementById("m").value;
var female = document.getElementById("f").value;
var form = document.getElementById("form");
  if(age=='' || height=='' || weight=='' || (male.checked==false && female.checked==false)){
    alert("All fields are required!");
  }else{
    countBmi();
  }
}


function countBmi(){
  var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
  var p = [age.value, height.value, weight.value]
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
     }else if(35<=bmi){
    result = 'Extremely obese';
     }
  
  document.getElementById("bmicounted").innerHTML=`Your BMI is = ${bmi} and You are ${result}`;

}