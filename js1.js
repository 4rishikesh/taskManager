let task= [];
function taskmanager(){
    let taskInput = document.getElementById("task").value;
    if(taskInput == " "){
        document.getElementById("error").textContent = "Task not entered!!";
    }else{
        document.getElementById("error").textContent;
        task.push(taskInput);
        update();
        document.getElementById("task").value;
    }
}
function update(){
    let output = document.getElementById("output");
    output.innerHTML = "";  
    task.forEach((task, index) => {
        let taskItem = document.createElement("div");
        taskItem.classList.add("task-item"); 

        let taskText = document.createElement("span");
        taskText.textContent = task;

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn"); 
        removeButton.onclick = function (){
            removeTask(index);
        };
        taskItem.appendChild(taskText);
        taskItem.appendChild(removeButton);
        output.appendChild(taskItem);
    });

    document.getElementById("clearList").style.display = task.length > 0 ? "block" : "none";
}
function removeTask(index){
    task.splice(index, 1); 
    update();
}
function clearList(){
    task = [];  
    update();
}
