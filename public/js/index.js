const noteTitleInput = document.getElementById("notes-title");
const notesBodyInput = document.getElementById("notes-body");
const notesDueInput = document.getElementById("notes-due-input");

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

const todosForm = document.getElementById("todos-form");
todosForm.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/todos", {
          method: "POST",
          body: JSON.stringify({
              title: todoTitleInput.value,
              text: todoTitleInput.value,
          }),
          headers: { "Content-Type": "application/json" },
      });
      const data = await response.json()
      console.log(data);
  } catch (error) {
      console.log(error);
  }
});

function getactivity() {}
