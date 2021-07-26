//selectors
let tip_content = document.querySelector('.tipContent')
let bill_input = document.querySelector(".billInput");
let tip_Amount = document.querySelector(".tip");
let reset_Button = document.querySelector('#resetButton')
let error_message = document.querySelector('.errorMessage');
let error_message2 = document.querySelector('.errorMessage2');
let eRR = document.querySelector('.error');
const customerNo = document.querySelector('.customer');
const totalAmount = document.querySelector('.total');
let dollarsection = document.querySelector('.dollar');
let dollarsection2 = document.querySelector('.dollar2');


let people = document.querySelector('.x');

bill_input.addEventListener("input",error1);
function error1(){
  cash = Number(bill_input.value);
  if(cash <=0 ){
    dollarsection.classList.add('error');
    error_message.style.visibility = "visible";
     }else{
    dollarsection.classList.remove('error');
    error_message.style.visibility = "hidden";
  }

}
customerNo.addEventListener("input",error2);
function error2(){
 let  cash= Number(customerNo.value);
  if(cash <=0 ){
    dollarsection2.classList.add('error');
    error_message2.style.visibility = "visible";
  }else{
    dollarsection2.classList.remove('error');
    error_message2.style.visibility = "hidden";


  }

}


//EventListeners
reset_Button.addEventListener('click',reset);

//function

let buttons = [
    '5%' ,
    '10% ',
    "15%",
    "25%",
    "50%",
]  

buttons.forEach(Tip =>{
  const newTip =document.createElement("button");
  newTip.classList.add("tipStyle");
  newTip.textContent= Tip ; 
  console.log(Tip);
  tip_content.appendChild(newTip);
})
const tipInput = document.createElement('input');
tipInput.setAttribute('placeholder','CUSTOM');
tipInput.classList.add('tipInputStyle');
tip_content.appendChild(tipInput); 

//selector 

// using the entire div to set button eventlistners
tip_content.addEventListener('click',(e) =>{
  if( e.target.nodeName === 'BUTTON'){
 let  x=parseFloat(e.target.textContent)/100;
  if (bill_input.value >0 && customerNo.value > 0){
   tip_Amount.value =  Number((bill_input.value * x/customerNo.value).toFixed(2));
  console.log (typeof(tip_Amount.value));
   totalAmount.value = Number((bill_input.value/customerNo.value).toFixed(2)) + tip_Amount.value; 
   console.log(typeof(totalAmount.value));

  }
  else if(bill_input.value <= 0){
    bill_input.classList.add('bill');
    console.log(2);
  }
  }
})
tip_content.addEventListener('input',(e)=>{
  {
    tip_Amount.value = (bill_input.value * (parseFloat(tipInput.value/100)/customerNo.value)).toFixed(2);
    totalAmount.value = (bill_input.value/customerNo.value).toFixed(2) + tip_Amount.value 
  }
})

function reset(){
bill_input.value = 0;
customerNo.value = 0;
tip_Amount.value = " $ 0.00";
totalAmount.value = "$ 0.00";
}


