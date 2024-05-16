const Book = require('../models/book');
const BookRepository = require('./bookRepository');

class BookRepositoryBanco extends BookRepository{

    async getAll(){
        return await Book.find();
    }

    async create(book){
        return await Book.create(book);
    }
    
    async update(id, book){
        return await Book.findByIdAndUpdate(id, book,{ new: true});
    }

    async delete(id){
        return await Book.findByIdAndDelete(id);
    }

}
module.exports = BookRepositoryBanco;