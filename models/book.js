const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    paginas: Number,
    editora: String
});

module.exports = mongoose.model('Book', bookSchema);