const Joi = window.joi;

const validate = {
    todo(data) {
        const schema = Joi.object({
            title: Joi.string().min(3).max(256).required(),
            due_date: Joi.number(),
        });

        return schema.validate(data);
    },
    note(data) {
        const schema = Joi.object({
            title: Joi.string().min(3).max(256).required(),
            text: Joi.string(),
        });

        return schema.validate(data);
    },
};


const todosForm = document.getElementById("todos-form");
todosForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let title = document.getElementById("todo-title").value;
    let due_date = parseInt("0" + document.getElementById("todo-due-date").value);

    if (due_date == 0) due_date = Date.now()

    if (validate.todo({ title, due_date }).error) {
        console.log(validate.todo({ title, due_date }).error);
        alert("Todo title must be 3-256 characters!");
        return;
    }

    try {
        const response = await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify({
                title,
                due_date,
            }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        console.log(data);
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
});

const notesForm = document.getElementById("notes-form");
notesForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("notes-title").value;
    const text = document.getElementById("notes-body").value;

    if (validate.note({ title, text }).error)
        return alert("Note title must be 3-256 characters!");

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

const listItems = document.querySelectorAll(".list-item");
listItems.forEach((item) => {
    item.addEventListener("click", async (e) => {
        const target = e.target;
        const parent = target.parentElement;
        console.log(target, parent);
        if (
            !(
                target.classList.contains("note-delete-button") ||
                target.classList.contains("todo-delete-button")
            )
        )
            return;

        console.log("here");
        try {
            const response = await fetch(
                `/api/${
                    parent.classList.contains("note-item") ? "notes" : "todos"
                }/${parent.dataset.id}`,
                {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                }
            );
        } catch (error) {
            console.log(error);
        }

        window.location.reload();
    });
});

const todoTitleInput = document.getElementById("todo-title");
const todosDueInput = document.getElementById("todo-due-input");
