

let inputValue = document.getElementById("toDoInput")

toDoList = [];
let isDone = false;
let buttonText = "Done";
let viewState = true

let render = (status) => {
    viewState = status
    let filter;
    if (!status)
        filter = toDoList.filter(el => !el.isDone);
    else
        filter = toDoList;

    let htmlToDoArray = filter.map((objectNum, index) => { //map can take 2 parameters: current element and its index
        return `<li style='text-decoration:${objectNum.isDone ? "line-through" : ""}'>${objectNum.text}<button onclick="removeItem(${index})">x</button><button id="buttonText" onclick="toggleDone(${index})">${objectNum.buttontext}</button></li>`;
    }).join('');
    document.getElementById('resultArea').innerHTML = htmlToDoArray;
}

let addItem = () => {
    let toDoValue = inputValue.value;
    let object = { text: toDoValue, isDone, buttontext: buttonText };
    toDoList.push(object);
    saveTodos();
    render(viewState);
}

let removeItem = (index) => {
    toDoList.splice(index, 1)
    console.log(toDoList);
    saveTodos();
    render(viewState);
}

let toggleDone = (index) => {
    toDoList[index].isDone = !(toDoList[index].isDone)
    console.log(toDoList[index].isDone);
    console.log(toDoList);
    if (toDoList[index].isDone) {
        toDoList[index].buttontext = "Undo";
    } else {
        toDoList[index].buttontext = "Done";
    }
    render(viewState);
}

function filterDone(event) {
    return event.isDone == false;
}

// Checkbox
let decider = document.getElementById("checkbox");
checked = document.getElementById("checkbox").checked = true;
unchecked = document.getElementById("checkbox").checked = false;
document.getElementById("checkbox").checked = false;

function isChecked(boo) {
    if (decider.checked) {
        render(false)
        console.log(checked);
    } else {
        render(true);
    }
}


var siteName = "my site";
localStorage.setItem('siteName', siteName);

let appState= {};

//save to storage
function saveTodos(){
    let str = JSON.stringify(toDoList);
    localStorage.setItem("toDoList",str);
}

//get data from storage
function getTodos(){
    let str = localStorage.getItem("toDoList")
    toDoList = JSON.parse(str);
    if (!toDoList){
        toDoList = [];
    }
}

getTodos();
render();