const router = require("express").Router();
const { Todo, Note, User } = require("../models");

router.get("/", async (req, res) => {
    let todos;
    try {
        const todosData = await Todo.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });
        todos = todosData.map((todo) => todo.get({ plain: true }));

    } catch (error) {
        res.status(500).json(error);
    }

    console.log(req.session.user_id);
    console.log(todos);

    res.render("homepage", {
        logged_in: req.session.logged_in,
        todos: todos,
    });
});

module.exports = router;
