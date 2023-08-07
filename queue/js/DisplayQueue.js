var Display_Queue = document.getElementById("Display_Queue");
function AddQueueSlot(Name, Description, Minutes) {
    var Time_Slot = document.createElement("li");
    var Properties = document.createElement("ul");
    var LiPerson = document.createElement("li");
    var LiDescription = document.createElement("li");
    var LiMinutes = document.createElement("li");
    LiPerson.textContent = Name;
    LiDescription.textContent = Description;
    LiMinutes.textContent = Minutes.toString();
    Properties.appendChild(LiPerson);
    Properties.appendChild(LiDescription);
    Properties.appendChild(LiMinutes);
    Time_Slot.appendChild(Properties);
    Display_Queue.append(Time_Slot);
}
function RefreshQueue() {
    removeAllChildNodes(Display_Queue)
    AddQueueSlot("Person1", "Task1", 1);
    AddQueueSlot("Person2", "Task2", 2);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

document.getElementById("Display_Person_Queue_Selector").addEventListener("change", RefreshQueue);