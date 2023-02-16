const noteTitleInput = document.getElementById("notes-title");
const notesBodyInput = document.getElementById("notes-body");
const notesDueInput = document.getElementById("notes-due-input");

var button = document.getElementById("notebut");
/*
button.addEventListener("click", function(save));
button.addEventListener("click", function(addNote));

function savenote() {
    document.getElementById("notes-title").innerHTML = savenote;
    document.getElementById("notesbod").innerHTML = savenote;
    document.getElementById("due").innerHTML = savenote;
}
function addNote(notete) {
  const logList = document.getElementById("notelist");
  const listItem= document.createElement("li");
  listItem.textContent = `${new Date().toLocaleString("en-US")}  -  ${noteText}`;
  logList.appendChild(listItem);
}
*/
document.getElementById("todobut").addEventListener("click", async(event) => {
  event.preventDefault();
  
  let title = document.getElementById("todo-title").value;
  let text = document.getElementById("todolist").value;

  // user_id: req.body.user_id,
  const response = await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify({ title, text }),
    headers: { 'Content-Type': 'application/json' },
  });
 if (response.ok) {
    //document.location.replace('/');
  } else {
    alert('Failed to Create todo.');
  }
});

function notelog() {
    document.getElementById("notes-title").innerHTML = savenote;
    document.getElementById("due").innerHTML = savenote;
    
const notesForm = document.getElementById("notes-form");
notesForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("/api/notes", {
            method: "POST",
            body: JSON.stringify({
                title: notesTitleInput.value,
                text: notesBodyInput.value,
            }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
});

const todoTitleInput = document.getElementById("todo-title");
const todosDueInput = document.getElementById("todo-due-input");

}
function getactivity(){
    
}