
var button = document.getElementById("notebut");
button.addEventListener("click", function(save));
button.addEventListener("click", function(addNote));

function save() {
  const textArea = document.getElementById("notesbody");
  const note = textArea.value;
  addNote.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.
}
function addNote(notete) {
  const logList = document.getElementById("notelist");
  const listItem= document.createElement("li");
  listItem.textContent = `${new Date().toLocaleString("en-US")}  -  ${noteText}`;
  logList.appendChild(listItem);
}