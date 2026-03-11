let themeBtn = document.querySelector(".theme");
let centers = document.querySelectorAll(".center1, .center2, .center3, .center4");
let dark = false;
function toggleTheme(){
   dark = !dark;
   centers.forEach(box=>{
      box.style.backgroundColor = dark ? "rgb(44,43,43)" : "white";
       box.style.color = dark? "rgb(136, 131, 131)" : "black";
   });
   themeBtn.innerHTML = dark 
   ? `<i class="fa-solid fa-sun"></i>` 
   : `<i class="fa-solid fa-moon"></i>`;
}

themeBtn.addEventListener("click",toggleTheme);
// All center........
let navBoxes = document.querySelectorAll(".nav1-box-text .box"); 
let maxBoxes = document.querySelectorAll(".max-box"); 
 document.querySelector(".max-box.center1").classList.remove("center1-status");
navBoxes.forEach((nav, index) => {
  nav.addEventListener("click", () => {
    maxBoxes.forEach(box => {
      if (box.classList.contains("center1")) {
        box.classList.add("center1-status");
      } else if (box.classList.contains("center2")) {
        box.classList.add("center2-status");
      } else if (box.classList.contains("center3")) {
        box.classList.add("center3-status");
      } else if (box.classList.contains("center4")) {
        box.classList.add("center4-status");
      }
    });
    if (index === 0) {
      document.querySelector(".max-box.center1").classList.remove("center1-status");
    } else if (index === 1) {
      document.querySelector(".max-box.center2").classList.remove("center2-status");
    } else if (index === 2) {
      document.querySelector(".max-box.center3").classList.remove("center3-status");
    } else if (index === 3) {
      document.querySelector(".max-box.center4").classList.remove("center4-status");
    }
    navBoxes.forEach(n => n.classList.remove("active"));
    nav.classList.add("active");

  });
});
let userInput = document.querySelector(".vella-value");
let inputBtn = document.querySelector(".vella-btn");
let aiDisplay = document.querySelector(".ai-box");
let texterDisplay = document.querySelector(".texter-display");
let aiTextBox = document.querySelector(".cen-text-box");
let cen = document.querySelector(".cen-1");
let loader = document.createElement ("span");
loader.innerText = "generating...."
loader.style.display ="none"
loader.className = "loader"
function displayerResult (result){
let texter = document.createElement("div");
   texter.innerText = result
   texter.className = "textbox2"
   texterDisplay.append(texter) 
}
function displayerInput (msgInput){
let texter2 = document.createElement("div");
  texter2.innerText =  msgInput
  texter2.className = "textbox1"
   texterDisplay.append(texter2)
   texterDisplay.append(loader)
}
const SendMessage  = async ()=>{
   let msgInput = userInput.value;
   displayerInput(msgInput)
   loader.style.display = "block"
try{
  const response = await puter.ai.chat(msgInput, { model: "gpt-5-nano" });
  let result = response.message.content
  displayerResult( result)
}
   catch(error){
  console.log("error",error)
}
finally{
  loader.style.display = "none"
}
}
inputBtn.addEventListener("click", () =>{
   aiDisplay.classList.remove("ai-hide")
   aiTextBox.style.display = "none"
  SendMessage()
   userInput.value = '';
}
)
// search engine.....
let engine = document.querySelector(".serach-engine");
let engineButton = document.querySelector(".search-btn");
let engineBox = document.querySelector(".engine-creater");
let newEngine = document.querySelector(".engine-box");
function performSearch(){

const query = engine.value.toLowerCase().trim();

newEngine.innerHTML = "";

if(query === ""){
engineBox.classList.add("engine-status");
return;
}

engineBox.classList.remove("engine-status");

const todoResult = todos.filter(task =>
task.text.toLowerCase().includes(query)
);

const essayResult = eassayT0do.filter(essay =>
essay.text.toLowerCase().includes(query)
);
if(todoResult.length === 0 && essayResult.length === 0){

let notFound = document.createElement("div");
notFound.innerText = "Sorry, not found";
notFound.className = "engine-shower2";

newEngine.append(notFound);
return;

}
todoResult.forEach(task => {

let item = document.createElement("div");
item.className = "engine-shower";
item.innerText = "Task: " + task.text;
item.addEventListener("click", function(){
document.querySelector(".max-box.center2").classList.remove("center2-status");
document.querySelector(".max-box.center1").classList.add("center1-status");
document.querySelector(".max-box.center3").classList.add("center3-status");
document.querySelector(".max-box.center4").classList.add("center4-status");
engineBox.classList.add("engine-status");
const allTasks = document.querySelectorAll(".todo-box-input");

allTasks.forEach(box => {

if(box.innerText === task.text){

box.scrollIntoView({behavior:"smooth"});
box.style.background = "yellow";

}

});

});
newEngine.append(item);

});

essayResult.forEach(essay => {
let item = document.createElement("div");
item.className = "engine-shower";
item.innerText = "Essay: " + essay.text;
item.addEventListener("click", function(){
document.querySelector(".max-box.center3").classList.remove("center3-status");
document.querySelector(".max-box.center1").classList.add("center1-status");
document.querySelector(".max-box.center2").classList.add("center2-status");
document.querySelector(".max-box.center4").classList.add("center4-status");
engineBox.classList.add("engine-status");
const allEssays = document.querySelectorAll(".piece-text");

allEssays.forEach(box => {

if(box.innerText === essay.text){

box.scrollIntoView({behavior:"smooth"});
box.style.background = "yellow";

}

});

});
newEngine.append(item);
})

}

// typing search
engine.addEventListener("input", performSearch);

// button search
engineButton.addEventListener("click", performSearch);
// cen2 containeer todotask
let textBox = document.querySelector(".taskbox")
let todoInput = document.querySelector(".task-input");
let todoDate = document.querySelector(".date-time");
let todoBtn = document.querySelector(".add-task");
let cen2 = document.querySelector(".cen-2");
let editMode = false;
 let currentMode = null;
let  currentMode2 = null;
const todotask = (todoObj, index)=>{
   let main_center = document.createElement("div");
   main_center.className = "main-center";
   let main_child = document.createElement("div");
   main_child.className = "main-child";
   main_child.style.border = "2px solid #6956df"
   for(let i = 0; i<3 ; i++){
      let boxTodo = document.createElement("div");
      if(i===0){
         boxTodo.innerText = todoObj.text
         boxTodo.className = "todo-box-input"
      }
      else if (i===1){
       boxTodo.innerText = todoObj.date
       boxTodo.className = "todo-box-date"
      }
      else if (i === 2){
      boxTodo.className = "todo-box-three"
      let btnOk = document.createElement("button");
      let navigition =  document.createElement("button");
      btnOk.className = "btn-ok"
      navigition.className = "nav-ok"
      btnOk.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
      navigition.innerHTML = `<i class="fa-solid fa-bars"></i>`
      boxTodo.append(btnOk);
      boxTodo.append(navigition);
      btnOk.addEventListener("click",()=>{
          if(navigition){
            navigition.style.display = "none"
         }
          let todoBox = main_child.querySelector(".todo-box-input");
          let todoBoxDate = main_child.querySelector(".todo-box-date");
         main_child.style.border = "2px solid #69ec34"
         btnOk.style.backgroundColor = "#69ec34"
         btnOk.style.color = "#050605"
         todoBox.style.textDecoration = "line-through"
          todoBoxDate.style.textDecoration = "line-through"
         let newRemove = document.createElement("button");
         newRemove.className = "new-remove"
         newRemove.innerText = "remove"
         boxTodo.append(newRemove)
         newRemove.addEventListener("click",()=>{
            main_center.remove();
         })
      })
      navigition.addEventListener("click", ()=>{
      let shower = main_child.querySelector(".tow-naver");
      if(shower){
         shower.remove()
         return;}
      let towNaver =  document.createElement("div");
      towNaver.className = "tow-naver";
      navigition.append(towNaver)
      let editBtn = document.createElement("button");
      editBtn.className = "edit"
      editBtn.innerText = "edit"
      editBtn.addEventListener("click", ()=>{
     let todoBox = main_child.querySelector(".todo-box-input");
     let todoBoxDate = main_child.querySelector(".todo-box-date");
   //   let newtext = todoBox.innerText;
   //   let newDate = todoBoxDate.innerText;
     todoInput.value = todoBox.innerText;
     todoDate.value = todoBoxDate.innerText;
     editMode = true
     currentMode = todoBox ;
     currentMode2 = todoBoxDate;
     todoBtn.style.display = "none"
     okNewbtn ()
    });

    let removeBtn = document.createElement("button");
      removeBtn.className = "remove";
      removeBtn.innerText = "remove"
      removeBtn.addEventListener("click",()=>{
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
            main_center.remove();
         })
      towNaver.append(editBtn, removeBtn)
      })
      }
      main_child.append(boxTodo)
   }
   main_center.append(main_child);
   cen2.append(main_center)
} 
let todos = [];
todoBtn.addEventListener("click", ()=>{
   if(todoInput.value === "" && todoDate.value === ""){
      alert("enter task & date")
   }
   else if(todoInput.value === ""){
        alert("enter task")
   }
    else if(todoDate.value === ""){
        alert("enter date")
   }
   else{
      let todoObj = {
      text : todoInput.value,
      date : todoDate.value,
      compeleted : false,
   }
   todos.push(todoObj);
   localStorage.setItem("todos",JSON.stringify(todos));
 todotask(todoObj, todos.length - 1)
   todoInput.value = ""
   todoDate.value = ""
   }
})
window.addEventListener("DOMContentLoaded", () => {

   let savedTodos = localStorage.getItem("todos");

   if(savedTodos){
      todos = JSON.parse(savedTodos);

      todos.forEach((todo, index) => {
         todotask(todo, index);
      });
   }
});
function okNewbtn () {
   let saveBtn = document.querySelector(".ok-btn")
    if(saveBtn){
      saveBtn.remove()
   }
   let OkBtn = document.createElement("button");
   OkBtn.className = "ok-btn"
   OkBtn.innerText = "Save"
   textBox.append(OkBtn)
  OkBtn.addEventListener("click", ()=>{
      currentMode.innerText = todoInput.value;
      currentMode2.innerText = todoDate.value;
      editMode = false;
      currentMode = null;
      currentMode2 = null;
      todoInput.value = ""
      todoDate.value = ""
      OkBtn.style.display = "none";
      todoBtn.style.display = "flex"
  })
}
// cen-3 essay-box.....................
let center3 = document.querySelector(".center3");
let cen3Text = document.querySelector(".cen-3");
cen3Text.classList.remove("cen-3-status")
let AddNewEssay = document.querySelector(".add-essay");
let cen3InputBox = document.querySelector(".cen3-add-input");
let title = document.querySelector(".title");
let inputer = document.querySelector(".essay-Input");
let exdate = new Date().toLocaleDateString();
inputer.className = "inputer-val"
let essaySaver = document.querySelector(".essay-saver");
let essayBack = document.querySelector(".essay-back");
let cen3ListContainer = document.createElement("div");
cen3ListContainer.className = "ListContainer";
center3.append(cen3ListContainer);
cen3ListContainer.style.display = "none"
let essmode = false;
let curr1 = null
let curr2 = null
function Newway (){
    cen3InputBox.classList.remove("cen3-add-input-status")
    cen3Text.classList.add("cen-3-status")
}
function eassayShower(displayBox,){
    let oldBox = document.querySelector(".con-box");
   if(oldBox){
      oldBox.remove();
   }
   let containerBox = document.createElement("div");
   containerBox.className = "con-box";
   containerBox.style.display = "flex"
   cen3ListContainer.append(containerBox);
   let ess_texter = document.createElement("div");
   ess_texter.className = "ess-texter";
   ess_texter.classList.remove("texter-hide")
   containerBox.append(ess_texter)
   ess_texter.innerText = displayBox.dataset.essayText
   containerBox.style.display = "flex";
   let ess_div = document.createElement("div");
   containerBox.append(ess_div);
   ess_div.className = "ess-div";
   ess_div.classList.remove("div-hide")
   let ess_edit = document.createElement("button");
   ess_edit.className = "ess-edit";
   ess_edit.innerText = "Edit";
   ess_div.append(ess_edit);
   ess_edit.addEventListener("click", ()=>{
       editEss(displayBox, ess_texter);
       ess_texter.style.display = "none";
       essayBack.style.display = "none";
       ess_edit.style.display = "none";
       ess_close.style.display = "none";
       containerBox.style.display = "none"
       cen3InputBox.classList.remove("cen3-add-input-status")
   })
   let ess_close = document.createElement("button");
   ess_close.className = "ess_close";
   ess_close.innerText = "close"
   ess_div.append(ess_close);
   ess_close.addEventListener("click", ()=>{
      containerBox.remove() 
   })
}
function Displayer (essayObj){
     cen3Text.classList.add("cen-3-status") ;
   let displayBox = document.createElement("div");
    displayBox.className = "List"
    cen3InputBox.classList.add("cen3-add-input-status")
    cen3ListContainer.style.display = "flex"
    displayBox.dataset.essayText = essayObj.content;
    essayBack.style.display = "flex";
   for(let i = 0 ; i<3 ; i++){
      let pieces = document.createElement("div");
      if(i===0){
         pieces.className = "piece-text";
         pieces.innerText = essayObj.text
      }
      else if(i===1){
         pieces.className = "piece-date";
         pieces.innerText = essayObj.date;
      }
      else if(i===2){
         pieces.className = "piece-button";
         pieces.classList = "piece-button";
         for(let i = 0 ; i<2 ; i++){
            let towbtn = document.createElement("button");
            if(i === 0){
               towbtn.className = "view"
               towbtn.innerText = "view"
               towbtn.addEventListener("click",()=>{
                  eassayShower (displayBox) 
               })
            }
            else if (i === 1){
               towbtn.className = "drop-remove"
               towbtn.innerText = "Remove"
               towbtn.addEventListener("click",()=>{
                let oldBox = document.querySelector(".List");
                 if(!oldBox){
                cen3Text.classList.remove("cen-3-status")
                }
                displayBox.remove();
                localStorage.removeItem("essays");
               })            }
            pieces.append(towbtn)
         }
      }
      displayBox.append(pieces)
   }
   cen3ListContainer.append(displayBox)
}
function editEss(displayBox, ess_texter){
   let titleElement = displayBox.querySelector(".piece-text");
   // let essTextElement = containerBox.querySelector(".ess-texter");
   title.value = titleElement.innerText;
   inputer.value = ess_texter.innerText;
    curr1 = titleElement;
    curr2 = ess_texter;
    essaySaver.style.display = "none";
    let SaveEdit = document.createElement("button");
    SaveEdit.className = "save-edit";
    SaveEdit.innerText = "Save";
    cen3InputBox.append(SaveEdit);
    SaveEdit.addEventListener("click", ()=>{
    curr1.innerText = title.value;
    curr2.innerText = inputer.value;
    essmode = false;
    curr1 = null;
    curr2 = null;
   displayBox.dataset.essayText = inputer.value;
    SaveEdit.remove();
    essaySaver.style.display = "block";
    cen3InputBox.classList.add("cen3-add-input-status")
    inputer.value = ""
    title.value = ""
    })
}
AddNewEssay.addEventListener("click", ()=>{
     Newway()
})
let eassayT0do = []
essaySaver.addEventListener("click", ()=>{
   if(inputer.value === "" && title.value === ""){
      alert("please enter title and topic")
   }
   else if(inputer.value === "" ){
      alert("please enter  topic")
   }
    else if(title.value === "" ){
      alert("please enter  title ")
   }
   else{
      let essayObj ={
      text : title.value,
      content : inputer.value,
      date : new Date().toLocaleDateString()
     }
     eassayT0do.push(essayObj); 
    localStorage.setItem("essays",JSON.stringify(eassayT0do));
      Displayer(essayObj);
        inputer.value = "";
        title.value = "";
   }
   
})
window.addEventListener("DOMContentLoaded", () => {

   let savedTodos = localStorage.getItem("essays");

   if(savedTodos){
      eassayT0do = JSON.parse(savedTodos);

      eassayT0do.forEach(todo => {
         Displayer(todo);
      });
   }
});
essayBack.addEventListener("click", ()=> {
     cen3Text.classList.remove("cen-3-status")
  cen3InputBox.classList.add("cen3-add-input-status");
});
// center4..............
let fromText = document.querySelector(".from");
let Totext = document.querySelector(".to");
let Fromselect = document.querySelector(".from-select");
let Toselect = document.querySelector(".to-select");
let submintBox = document.querySelector(".submint-box")
let submint = document.querySelector(".submint");
 submint.classList.remove("submint-hide")
let  formVal = Fromselect.value
let tormVal = Toselect.value
let gen_text = document.createElement("div");
gen_text.className = "gen_text gen_hide";
gen_text.innerText = "generating....."
submintBox.append(gen_text);
let select = document.querySelectorAll(".cen-4-con select");
for (const key of select) {
 for (const [code, country] of Object.entries(countryLan)) { 
   let option = document.createElement("option"); 
   option.value = code; 
   option.innerText = country.name;
    if (key.classList.contains("from-select")) {
    key.value = "PK";  
  } else if (key.classList.contains("to-select")) {
    key.value = "US";   
  }
   Flags(key);
    key.append(option); 
   } 
    key.addEventListener("change", (evt) => { 
    Flags(evt.target); });
    }
function Flags (element){
  let Code = element.value;
   let imgBox = element.closest(".cen-4-con");
   let imgSrc = `https://flagsapi.com/${Code}/flat/64.png`;
   let img = imgBox.querySelector("img");
   img.src = imgSrc
}
const sendToTranslationAPI = async ()=>{
  let fromCode = Fromselect.value;
 let toCode = Toselect.value;
 let fromLanguage = countryLan[fromCode].name;
 let toLanguage = countryLan[toCode].name;
 let prompt = `${toLanguage}${fromText.value}`
try{
  const response = await  puter.ai.chat(prompt, { model: "gpt-5-nano" })
  Totext.innerText = response.message.content;
}
 catch(err){
   console.log(err)
 }
 finally{
    gen_text.classList.add("gen_hide")
    let clearButton = document.createElement("button");
    clearButton.innerText = "clear input "
    clearButton.classList = "clear-button clear-hide"
    submintBox.append(clearButton)
    clearButton.classList.remove("clear-hide")
    clearButton.addEventListener("click", ()=>{
      fromText.value = "";
      Totext.value = "";
      clearButton.classList.add("clear-hide")
      submint.classList.remove("submint-hide")
    })

 }

}
submint.addEventListener("click",(event)=> {
   event.preventDefault(); 
   sendToTranslationAPI() ;
 submint.classList.add("submint-hide");
 gen_text.classList.remove("gen_hide")
})
