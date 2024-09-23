// blog-button
document.getElementById('blog-btn').addEventListener('click',function(){
     document.getElementById('blog-btn').classList.add('hidden');
     window.location.href='blog.html';
})
 
// input-value string to number convert

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
 }

 else{
       //  create Element start
let div = document.createElement('div');
div.innerHTML = `
<dialog id="my_modal_3" class="modal">
             <div class="modal-box">
               <h3 class="text-lg font-bold">Hello!</h3>
               <p class="py-4">Press ESC key or click on ✕ button to close</p>
               <form method="dialog">
                 <button class="btn">Close Confirmation</button>
               </form>
             </div>
           </dialog>
`;
document.getElementById('container').appendChild(div);
// create Element end
     alert('Please Input a Valided Number');
 }





// balance amount count end
})

