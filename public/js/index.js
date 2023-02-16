const Joi = window.joi

const validate = {
  todo(data) {
      const schema = Joi.object({
          title: Joi.string().alphanum().min(3).max(256).required(),
      });

      return schema.validate(data);
  },
  note(data) {
      const schema = Joi.object({
          title: Joi.string().alphanum().min(3).max(256).required(),
          text: Joi.string().required(),
      });

      return schema.validate(data);
  },
};

const noteTitleInput = document.getElementById("notes-title");
const notesBodyInput = document.getElementById("notes-body");
const notesDueInput = document.getElementById("notes-due-input");

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