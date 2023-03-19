const { Schema, model } = require('mongoose');

const TodoSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    }
})

module.exports = model('todo-list', TodoSchema);