let inputValue = document.getElementById("toDoInput")

toDoList = [];
let isDone = false;
let buttonText = "Done";
let viewState = true

let render = (status) => {
    viewState = status
    let filter;
    if (!status)
    filter = toDoList.filter(el=> !el.isDone);
    else
    filter = toDoList;

    let htmlToDoArray = filter.map((objectNum, index) => { //map can take 2 parameters: current element and its index
        return `<li style='text-decoration:${ objectNum.isDone  ?"line-through": ""}'>${objectNum.text}<button onclick="removeItem(${index})">x</button><button id="buttonText" onclick="toggleDone(${index})">${objectNum.buttontext}</button></li>`;
    }).join('');
    document.getElementById('resultArea').innerHTML = htmlToDoArray;
}

let addItem = () => {
    let toDoValue = inputValue.value;
    let object = {text: toDoValue, isDone, buttontext: buttonText};
    toDoList.push(object);
    render(viewState);
}

let removeItem = (index) => {
    toDoList.splice(index, 1)
    console.log(toDoList);
    render(viewState);
}



let toggleDone = (index) =>{
    toDoList[index].isDone = !(toDoList[index].isDone)
    console.log(toDoList[index].isDone);
    console.log(toDoList);
    if (toDoList[index].isDone){
        toDoList[index].buttontext = "Undo";
    }else{
        toDoList[index].buttontext = "Done";
    }
    render(viewState);
}

function filterDone(event){
    return event.isDone == false;
}



// Check
let decider = document.getElementById("checkbox");
checked = document.getElementById("checkbox").checked = true;
unchecked = document.getElementById("checkbox").checked = false;


// Uncheck
document.getElementById("checkbox").checked = false;

function isChecked(boo){
    if(decider.checked){
        render(false)
        console.log(checked);
      }else{
        render(true);
      }
}

//if box is clicked then filter