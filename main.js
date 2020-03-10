let inputValue = document.getElementById("toDoInput")
let isDone = false;
let buttonText = "Done";
let viewState = true

toDoList = [];

//Render
let render = (status) => {
    viewState = status
    let filter;
    if (!status)
        filter = toDoList.filter(el => !el.isDone);
    else
        filter = toDoList;

    let htmlToDoArray = filter.map((objectNum, index) => { //map can take 2 parameters: current element and its index
        return `<li style='text-decoration:${objectNum.isDone ? "line-through" : ""}'>${objectNum.text}<button  class="btn btn-sm btn-light m-3" onclick="removeItem(${index})">Remove</button><button class="btn btn-sm btn-light" id="buttonText" onclick="toggleDone(${index})">${objectNum.buttontext}</button></li>`;
    }).join('');
    document.getElementById('resultArea').innerHTML = htmlToDoArray;
}

//Add items to the list
let addItem = () => {
    let toDoValue = inputValue.value;
    let object = { text: toDoValue, isDone, buttontext: buttonText };
    toDoList.push(object);
    resetInput();
    saveTodos();
    render(viewState);
}

//Remove items from the list
let removeItem = (index) => {
    toDoList.splice(index, 1)
    console.log(toDoList);
    saveTodos();
    render(viewState);
}

//Toggle done or undo
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

//Filter incomplete items
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

//reset text in input box
function resetInput() {
    inputValue.value=null;
  }

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