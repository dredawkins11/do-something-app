const router = require("express").Router();
const { Todo } = require("../../models");
const auth = require("../../utils/auth");

router.post("/", auth, async (req, res) => {
    try {
        const newTodo = await Todo.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newTodo);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:id", auth, async (req, res) => {
    try {
        const todoData = await Todo.update(
            {
                ...req.body,
                user_id: req.session.user_id,
            },
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.user_id,
                },
            }
        );

        if (!todoData) {
            res.status(404).json({ message: "No todo found with this id!" });
            return;
        }

        res.status(200).json(todoData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete("/:id", auth, async (req, res) => {
    try {
        const todoData = await Todo.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!todoData) {
            res.status(404).json({ message: "No todo found with this id!" });
            return;
        }

        res.status(200).json(todoData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
