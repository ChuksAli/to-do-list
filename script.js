const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//Function for adding task
function addTask(){
    if (inputBox.value === ''){
        alert("Task input can not be empty. Please enter task.");

    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //Creating span cross element at the end of tasks
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    
    }
    inputBox.value = '';
    saveData(); 
   
}
//Strikethrough on completed tasks
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    //Removing items using the cross
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
//Saving list to local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//Function to present saved list from previous session
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")  || '';
}

showTask();