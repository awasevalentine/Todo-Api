"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = void 0;
const mongoose = require("mongoose");
exports.todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    dueDate: {
        type: Date,
        required: true,
    },
    important: {
        type: Boolean
    },
    status: {
        type: Boolean
    }
});
//# sourceMappingURL=todo.schema.js.map