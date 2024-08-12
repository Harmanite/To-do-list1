const inPutBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inPutBox.value === ''){
        alert("Please add an event");
    }
        else{
            let li = document.createElement("li");
            li.innerHTML = inPutBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span")
            span.innerHTML = "\u00d7"
            li.appendChild(span);
        }
        inPutBox.value = "";
        saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();