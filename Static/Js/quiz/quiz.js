console.log('ABCD');
const setUp=[
    {
        question: "What is your purpose of doing Gym?",
        a: "Lose Weight",
        b: "Gain Weight",
        c:"Gain Muscle"
    },{
        question: "How do You Want to look after the results?",
        a: "Less Fat",
        b: "Less Slim",
        c:"Buffed Up"
    },{
        question: "What Kind of Body type does your significant other Likes?",
        a: "Slim",
        b: "Chubby",
        c:"Buffed Up"
    }
];
const question1=document.getElementsByClassName('.quesTion');
const opTion1= document.getElementById('#anS1');
const opTion2= document.getElementById('#anS2');
const opTion3= document.getElementById('#anS3');
const subBtn= document.getElementsByClassName('.suBmit');
console.log(question1);
const loadQue =()=>{
    // question1.innerHtml=setUp[0].question;
    console.log(setUp[0]);
}
loadQue();