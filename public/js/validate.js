const Joi = require("joi");

module.exports = {
    signUp(data) {
        const schema = Joi.object({
            username: Joi.string().alphanum().min(3).max(30).required(),
            password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
            email: Joi.string().email(),
        });

        return schema.validate(data)
    },
    todo(data) {
        const schema = Joi.object({
            title: Joi.string().alphanum().min(3).max(256).required()
        })

        return schema.validate(data)
    },
    note(data) {
        const schema = Joi.object({
            title: Joi.string().alphanum().min(3).max(256).required(),
            text: Joi.string().required()
        })

        return schema.validate(data)
    },
};
