let saveInputValue = JSON.parse(localStorage.getItem('saveInputValue')) || [];
//let saveInputValue = localStorage.getItem('saveInputValue') ? JSON.parse(localStorage.getItem('saveInputValue')) : [];
const ulEl = document.querySelector('.js-list');

function saveInputItems(){
  let saveInput = document.querySelector('.js-input-el').value;
  saveInputValue.push(saveInput);
  renderInputItems();//function for handling additional items
  savedItems();//function for saving items in a localStorage.
  saveClear();//function for clearing input when a user enter a value.
}
document.querySelector('.js-input-save').addEventListener('click',()=>{
  saveInputItems();
});

function saveClear(){
  document.querySelector('.js-input-el').value = "";//because value here is a string, that is why "";
}


//Adding more Items function
function renderInputItems(){
  let listItems = " ";
  for(let i = 0; i < saveInputValue.length; i++){
   listItems += `
   <li>
     <a target='_blank' href='${saveInputValue[i]}'> 
       ${saveInputValue[i]}
     </a>
   </li>`;
   //const li = document.createElement("li");//create element li
   //li.textContent = saveInputValue[i];
   //ulEl.append(li);
  }
  ulEl.innerHTML = listItems;
  
}

function resetButton(){
  //[] This square bracket is an array. innerHTML is a string not an array.
  document.querySelector('.js-list').innerHTML = " ";
}
document.querySelector('.js-reset').addEventListener('click',()=>{
  resetButton();
});

function savedItems(){
  localStorage.setItem('saveInputValue',JSON.stringify(saveInputValue));
}


const button = document.querySelector('.js-saved-items');
let html = "";//Reset the HTML
function getItemsSaved(){
  let result =  JSON.parse(localStorage.getItem('saveInputValue')) || [];
  //console.log(result.length);
  //ulEl.innerHTML = "";//clear existing items
  //(``) what in the bracket is called template string.
    result.slice(0,100).forEach(r => {//slice(0,100) get the first 100 items saved.
      html += 
      `<li>
        <a target='_blank' href='${r}'>
          ${r}
        </a>
      </li>`
    });
    ulEl.innerHTML = html;
    
    //button.removeEventListener('click',()=>{
      //getItemsSaved();
    //});
}
button.addEventListener('click',()=>{
  getItemsSaved();
});


function removeItems(){
  localStorage.removeItem('saveInputValue');//Remove from localStorage.
  saveInputValue = [];//Updating the saveInputValue. [] Clear the array in the memory.
  html = "";
  ulEl.innerHTML = "";//Clear the display list.
}
document.querySelector('.js-remove-items').addEventListener('click',()=>{
  removeItems();
});
