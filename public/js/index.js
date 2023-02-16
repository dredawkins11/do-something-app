const Joi = window.joi;

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

const todosForm = document.getElementById("todos-form")
todosForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let title = document.getElementById("todo-title").value;
    let due_date = document.getElementById("todo-due-date").value

    try {
      const response = await fetch("/api/todos", {
          method: "POST",
          body: JSON.stringify({
              title,
              due_date
          }),
          headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      window.location.reload();
      console.log(data);
  } catch (error) {
      console.log(error);
  }
});

const notesForm = document.getElementById("notes-form");
notesForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("notes-title").value;
    const text = document.getElementById("notes-body").value;

    try {
        const response = await fetch("/api/notes", {
            method: "POST",
            body: JSON.stringify({
                title,
                text,
            }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        window.location.reload();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
});

const todoTitleInput = document.getElementById("todo-title");
const todosDueInput = document.getElementById("todo-due-input");
