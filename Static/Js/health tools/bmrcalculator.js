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
    var BMR= 88.362+(13.397* weight)+(4.799*height)-(5.677*age);
    document.getElementById('fbmi01').innerHTML=`Your Basal Metabolism Rate is= ${BMR}`;
}
function fmale() 
{   
    var weight= parseInt(document.getElementById("mass007").value), height= parseInt(document.getElementById("tall001").value), age= parseInt(document.getElementById("old89").value);
    var BMR= 447.593+(9.247* weight)+(3.098*height)-(4.330*age);
    document.getElementById('fbmi01').innerHTML=`Your Basal Metabolism Rate is= ${BMR}`;
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
    document.getElementById('fbmi01').innerHTML=`Check Your BMR here`;
}