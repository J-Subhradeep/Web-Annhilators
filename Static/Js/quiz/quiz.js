console.log('ABCD');
const setUp=[
    {
        question: "Q1. What is your purpose of doing Gym?",
        a: "Lose Weight",
        b: "Gain Weight",
        c:"Gain Muscle"
    },{
        question: "Q2. How do You Want to look after the results?",
        a: "Less Fat",
        b: "Less Slim",
        c:"Buffed Up"
    },{
        question: "Q3. What Kind of Body type does your significant other Likes?",
        a: "Slim",
        b: "Chubby",
        c:"Buffed Up"
    }
];
const question1=document.querySelector('.quesTion');
const opTion1= document.querySelector('#anS1');
const opTion2= document.querySelector('#anS2');
const opTion3= document.querySelector('#anS3');
const subBtn= document.querySelector('.suBmit');
const answers= document.querySelectorAll('.ansWers');
const showPlan= document.querySelector('.showPlan');
const mainQue= document.querySelector('.bOx');
console.log(answers.length);
// console.log(question1);
let quesCount=0;
let planOne=0, planTwo=0, planThree=0;
const loadQue =()=>{
    const show = setUp[quesCount];
    question1.innerText=show.question;
    opTion1.innerText= show.a;
    opTion2.innerText= show.b;
    opTion3.innerText= show.c;
    // console.log(show.question);
}
loadQue();
const getAns=()=>{
    // let aNs;
    let selected= document.querySelector('input[type="radio"]:checked');
    if(selected.value=='ans1')
    {
        // planOne++;
       return(selected.id);
       
    }
    else if(selected.value=='ans2')
    {
        // planTwo++;
        return(selected.id);
        
    }
    else if(selected.value=='ans3')
    {
        // planThree++;
        return(selected.id);
        
    }
    else
    alert('select a proper option');
    
}
const deselectAll = () =>{
    answers.forEach((currentElemen)=>currentElemen.checked=false)
}
subBtn.addEventListener('click', ()=>{
    const checkAns= getAns();
    if(checkAns=='opTion1')
    planOne++;
    else if (checkAns=='opTion2')
    planTwo++;
    else
    planThree++;
    // console.log(planOne);
    // console.log(planTwo);
    // console.log(planThree);
    quesCount++;
        deselectAll();
    if(quesCount<setUp.length){
        
        loadQue();
    }
    else{
        mainQue.innerHTML=`
        <p>We Have Assessed what you want and accordding to those requiredments we have suggested you a plan</p>
        <p>Want To take the quiz again?</p>
        <button onclick="location.reload()">Again</button>
        `
        if(planOne==2||planOne==3)
        showPlan.innerHTML=`
        <h2 class="pRice">Your recommended Plan Is</h2>
        <div class="columns">
      <ul>
        <li>
        <ul class="price">
          <li class="header">Weight Loss 101</li>
          <li class="grey"> ₹1200 / monthly for single month membership</li>
          <li class="grey"> ₹800 / monthly for 3 month membership</li>
          <li class="grey">Diet plan provided by residing nutritionist</li>
          <li class="grey">24*7 Diet consultation</li>
          <li class="grey">Top Quality equipments</li>
          <li class="grey">Personal Trainer available (+ ₹200/month)</li>
          <li class="grey"><a href="/Src/shopping/payment.html" class="button">Sign Up</a></li>
        </ul>
        </li>
        </ul>
        `
        else if(planTwo==2||planTwo==3)
        showPlan.innerHTML=`
        <h2 class="pRice">Your recommended Plan Is</h2>
        <div class="columns">
      <ul>
      <li>
      <ul class="price">
        <li class="header" >Weight Gain</li>
        <li class="grey"> ₹1200 / monthly for single month membership</li>
        <li class="grey">₹800 / monthly for 3 month membership</li>
        <li class="grey">Diet plan provided by residing nutritionist</li>
        <li class="grey">24*7 Diet consultation</li>
        <li class="grey">Top Quality equipments</li>
        <li class="grey">Personal Trainer available (+ ₹200/month)</li>
        <li class="grey"><a href="/Src/shopping/payment.html" class="button">Sign Up</a></li>
        </ul>
        </li>
        </ul>
        `
        else if(planThree==2 || planThree==3)
        showPlan.innerHTML=`
        <h2 class="pRice">Your recommended Plan Is</h2>
        <div class="columns">
      <ul>
      <li>
      <ul class="price">
      <li class="header">Bulk Up</li>
      <li class="grey"> ₹1600 / monthly for single month membership</li>
      <li class="grey">₹1000 / monthly for 3 month membership</li>
      <li class="grey">Diet plan provided by residing nutritionist</li>
      <li class="grey">24*7 Diet consultation</li>
      <li class="grey">Supplements available with supervision</li>
      <li class="grey">Top Quality equipments</li>
      <li class="grey">Personal Trainer available</li>
      <li class="grey"><a href="/Src/shopping/payment.html" class="button">Sign Up</a></li>
    </ul>
        </li>
        </ul>
        `
        else
        showPlan.innerHTML=`
        <h2 class="pRice">Your can choose from these three</h2>
        <div class="columns">
      <ul>
        <li>
        <ul class="price">
          <li class="header">Weight Loss 101</li>
          <li class="grey"> ₹1200 / monthly for single month membership</li>
          <li class="grey"> ₹800 / monthly for 3 month membership</li>
          <li class="grey">Diet plan provided by residing nutritionist</li>
          <li class="grey">24*7 Diet consultation</li>
          <li class="grey">Top Quality equipments</li>
          <li class="grey">Personal Trainer available (+ ₹200/month)</li>
          <li class="grey"><a href="/Src/shopping/payment.html" class="button">Sign Up</a></li>
        </ul>
        </li>
        <li>
        <ul class="price">
          <li class="header" >Weight Gain</li>
          <li class="grey"> ₹1200 / monthly for single month membership</li>
          <li class="grey">₹800 / monthly for 3 month membership</li>
          <li class="grey">Diet plan provided by residing nutritionist</li>
          <li class="grey">24*7 Diet consultation</li>
          <li class="grey">Top Quality equipments</li>
          <li class="grey">Personal Trainer available (+ ₹200/month)</li>
          <li class="grey"><a href="/Src/shopping/payment.html" class="button">Sign Up</a></li>
          </ul>
          </li>
          <li>
      <ul class="price">
      <li class="header">Bulk Up</li>
      <li class="grey"> ₹1600 / monthly for single month membership</li>
      <li class="grey">₹1000 / monthly for 3 month membership</li>
      <li class="grey">Diet plan provided by residing nutritionist</li>
      <li class="grey">24*7 Diet consultation</li>
      <li class="grey">Supplements available with supervision</li>
      <li class="grey">Personal Trainer available</li>
      <li class="grey"><a href="/Src/shopping/payment.html" class="button">Sign Up</a></li>
    </ul>
        </li>
        </ul>
        `
    }
})