// blog-button
document.getElementById('blog-btn').addEventListener('click',function(){
     document.getElementById('blog-btn').classList.add('hidden');
     window.location.href='blog.html';
})
// card-1 function start
document.getElementById('donate-one')
.addEventListener('click', function(event){
     event.preventDefault();
     let inputValue =  getInputValueById('input-one');
     // balance amount count start
 let campOneBalance = getInnerTextById('camp-one-balance');
 let mainBalance =getInnerTextById('main-balance');
if(inputValue > 0){
      let newMainBalance = mainBalance - inputValue;
 document.getElementById('main-balance').innerText =newMainBalance;
 let newCampBalance = campOneBalance + inputValue;
 document.getElementById('camp-one-balance').innerText =newCampBalance;
 let modalContent = document.getElementById('my_modal_3');
 modalContent.onclick=my_modal_3.showModal();
 }

 else{
     alert('Please Input a Valid Number');
 }
})
// card-function-end

// card-2 function start
document.getElementById('donate-two')
.addEventListener('click', function(event){
     event.preventDefault();
     let inputValue =  getInputValueById('input-two');
     // balance amount count start
 let campOneBalance = getInnerTextById('camp-two-balance');
 let mainBalance =getInnerTextById('main-balance');
if(inputValue > 0){
      let newMainBalance = mainBalance - inputValue;
 document.getElementById('main-balance').innerText =newMainBalance;
 let newCampBalance = campOneBalance + inputValue;
 document.getElementById('camp-two-balance').innerText =newCampBalance;
 let modalContent = document.getElementById('my_modal_2');
 modalContent.onclick=my_modal_3.showModal();
 }

 else{
     alert('Please Input a Valid Number');
 }
})
// card-2 function end


// card-3 function start
document.getElementById('donate-three')
.addEventListener('click', function(event){
     event.preventDefault();
     let inputValue =  getInputValueById('input-three');
     // balance amount count start
 let campOneBalance = getInnerTextById('camp-three-balance');
 let mainBalance =getInnerTextById('main-balance');
if(inputValue > 0){
      let newMainBalance = mainBalance - inputValue;
 document.getElementById('main-balance').innerText =newMainBalance;
 let newCampBalance = campOneBalance + inputValue;
 document.getElementById('camp-three-balance').innerText =newCampBalance;
 let modalContent = document.getElementById('my_modal_1');
 modalContent.onclick=my_modal_3.showModal();
 }

 else{
     alert('Please Input a Valid Number');
 }
})
// card-3 function end