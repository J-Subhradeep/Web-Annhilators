function checkgender() {
    let selected= document.querySelector('input[type="radio"]:checked')
if(selected.value=='male')
{
    alert('male')
    male();
}
else if(selected.value=='fmale')
{
    fmale();
}
else
alert('Choose Gender to Get Basal Metabolism Rate');  
}
function male() {
    var height= parseInt(document.getElementById("tall001").value);
    var IBW= 22*(height/100)*(height/100);
document.getElementById('fbmi01').innerHTML=`Your Basal Metabolism Rate is= ${IBW}`;
}
function fmale() {
    var height= parseInt(document.getElementById("tall001").value);
    var IBW= 22*((height/100)-0.1)*((height/100)-0.1);
document.getElementById('fbmi01').innerHTML=`Your Basal Metabolism Rate is= ${IBW}`;
}