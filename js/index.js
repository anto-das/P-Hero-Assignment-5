// blog-button start
document.getElementById('blog-btn').addEventListener('click',function(){
     document.getElementById('blog-btn').classList.add('hidden');
     window.location.href='blog.html';
})
// blog-button end

// history function start

document.getElementById('history-btn')
.addEventListener('click',function(){
 document.getElementById('donation-btn').classList.remove('btn-accent');
 document.getElementById('history-btn').classList.add('btn-accent');
document.getElementById('card-container').classList.add('hidden');
document.getElementById('history-title').classList.remove('hidden');
document.getElementById('currentDateTime').classList.remove('hidden');
document.getElementById('currentDateTime2').classList.remove('hidden');
document.getElementById('currentDateTime3').classList.remove('hidden');
document.getElementById('history-content').classList.remove('hidden');
})
// history function end

// donation function start
document.getElementById('donation-btn')
.addEventListener('click', function(){
    document.getElementById('history-btn').classList.remove('btn-accent');
     document.getElementById('donation-btn').classList.add('btn-accent');
     document.getElementById('card-container').classList.remove('hidden');
     document.getElementById('history-content').classList.add('hidden');
})
// donation function end


// card-1 function start
document.getElementById('donate-one')
.addEventListener('click', function(){
     let inputValue =  getInputValueById('input-one');
     // balance amount count start
     let mainBalance =getInnerTextById('main-balance');
     let campBalance = getInnerTextById('camp-one-balance');
     if(isNaN(inputValue)){
            alert('Please Input a Valid Number');
            let emptyInput = document.getElementById('input-one');
            emptyInput.value ='';
            return;
        }
else if(inputValue > mainBalance){
    alert('Your Balance Is Low Please Check Your Balance');
    let emptyInput = document.getElementById('input-one');
    emptyInput.value ='';
    return;
 }
else if(inputValue > 0){
      let newMainBalance = mainBalance - inputValue;
 document.getElementById('main-balance').innerText =newMainBalance;
 let newCampBalance = campBalance + inputValue;
 document.getElementById('camp-one-balance').innerText =newCampBalance;
 let modalContent = document.getElementById('my_modal_3');
 modalContent.onclick=my_modal_3.showModal();
 let emptyInput = document.getElementById('input-one');
 emptyInput.value ='';


//  history part
 let div = document.createElement('div');
 div.classList.add('bg-white','border-2','border-[#1111111A]','p-5','shadow-lg','rounded-lg');
 div.innerHTML =`
 <h1 id="history-title" class="hidden my-2 text-2xl font-bold">${inputValue} Taka is Donated for famine-2024 at Nohakhali, Bangladesh</h1>
 <p id="currentDateTime" class="hidden"></p>
 `
  let historyContainer = document.getElementById('history-content');
  historyContainer.insertBefore(div,historyContainer.firstChild);
  return;
 }

 else{
     alert('Please Input a Valid Number');
     let emptyInput = document.getElementById('input-one');
     emptyInput.value ='';
     return;
 }
})
// card-function-end

// card-2 function start
document.getElementById('donate-two')
.addEventListener('click', function(){
     let inputValue =  getInputValueById('input-two');
     // balance amount count start
     let mainBalance =getInnerTextById('main-balance');
 let campBalance = getInnerTextById('camp-two-balance');
 if(isNaN(inputValue)){
    alert('Please Input a Valid Number');
    let emptyInput = document.getElementById('input-two');
    emptyInput.value ='';
    return;
}
else if(inputValue > mainBalance){
    alert('Your Balance Is Low Please Check Your Balance');
    let emptyInput = document.getElementById('input-two');
    emptyInput.value ='';
    return;
 }
else if(inputValue > 0){
      let newMainBalance = mainBalance - inputValue;
 document.getElementById('main-balance').innerText =newMainBalance;
 let newCampBalance = campBalance + inputValue;
 document.getElementById('camp-two-balance').innerText =newCampBalance;
 let modalContent = document.getElementById('my_modal_2');
 modalContent.onclick=my_modal_3.showModal();
 let emptyInput = document.getElementById('input-two');
 emptyInput.value ='';
//  history part

let div = document.createElement('div');
 div.classList.add('bg-white','border-2','border-[#1111111A]','p-5','shadow-lg','rounded-lg');
 div.innerHTML =`
 <h1 id="history-title" class="hidden my-2 text-2xl font-bold">${inputValue} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
 <p id="currentDateTime2" class="hidden"></p>
 `
  let historyContainer = document.getElementById('history-content');
  historyContainer.insertBefore(div,historyContainer.firstChild);
 return;
 }


 else{
     alert('Please Input a Valid Number');
     let emptyInput = document.getElementById('input-two');
 emptyInput.value ='';
 return;
 }
})
// card-2 function end


// card-3 function start
document.getElementById('donate-three')
.addEventListener('click', function(){
     let inputValue =  getInputValueById('input-three');
     // balance amount count start
     let mainBalance =getInnerTextById('main-balance');
 let campBalance = getInnerTextById('camp-three-balance');
 if(isNaN(inputValue)){
    alert('Please Input a Valid Number');
    let emptyInput = document.getElementById('input-three');
    emptyInput.value ='';
    return;
}
else if(inputValue > mainBalance){
    alert('Your Balance Is Low Please Check Your Balance');
    let emptyInput = document.getElementById('input-three');
    emptyInput.value ='';
    return;
 }
else if(inputValue > 0){
      let newMainBalance = mainBalance - inputValue;
 document.getElementById('main-balance').innerText =newMainBalance;
 let newCampBalance = campBalance + inputValue;
 document.getElementById('camp-three-balance').innerText =newCampBalance;
 let modalContent = document.getElementById('my_modal_1');
 modalContent.onclick=my_modal_3.showModal();
 let emptyInput = document.getElementById('input-three');
 emptyInput.value ='';
//  history part 
let div = document.createElement('div');
 div.classList.add('white','border-2','border-[#1111111A]','p-5','shadow-lg','rounded-lg');
 div.innerHTML =`
 <h1 id="history-title" class="hidden my-2 text-2xl font-bold">${inputValue} Taka is Donated for famine-2024 at Nohakhali, Bangladesh</h1>
 <p id="currentDateTime3" class="hidden"></p>
 `
  let historyContainer = document.getElementById('history-content');
  historyContainer.insertBefore(div,historyContainer.firstChild);
 return;
 }

 else{
     alert('Please Input a Valid Number');
     let emptyInput = document.getElementById('input-three');
 emptyInput.value ='';
 return;
 }
})
// card-3 function end
