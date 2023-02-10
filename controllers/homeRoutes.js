const router = require("express").Router();
const { Todo, Note, User } = require("../models");

router.get("/", async (req, res) => {

    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
      }

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

router.get("/login", async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
      }

    res.render("login")
})

module.exports = router;
