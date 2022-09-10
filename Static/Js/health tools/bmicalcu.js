function checkgender() 
{
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
function male() 
{   
    var weight= parseInt(document.getElementById("mass007").value), height= parseInt(document.getElementById("tall001").value), age= parseInt(document.getElementById("old89").value);
    var BMR= (height/age)/weight;
    document.getElementById('fbmi01').innerHTML=`Your Body Mass Index is= ${BMR}`;
}
function fmale() 
{   
    var weight= parseInt(document.getElementById("mass007").value), height= parseInt(document.getElementById("tall001").value), age= parseInt(document.getElementById("old89").value);
    var BMR= (height/age)/weight;
    document.getElementById('fbmi01').innerHTML=`Your Body Mass Index is= ${BMR}`;
}
function allclear() {
    // selected.value=NULL;
    let selected= document.querySelector('input[type="radio"]:checked')
    if(selected.value=='male' || selected.value=='fmale')
    {
       selected.value=null;
    }
    document.getElementById("mass007").value=null;
    document.getElementById("tall001").value=null;
    document.getElementById("old89").value=null;
    document.getElementById('fbmi01').innerHTML=`Check Your BMI here`;
}