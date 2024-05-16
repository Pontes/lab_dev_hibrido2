const BookRepositoryBanco = require('../repositories/bookRepositoryBanco');
const bookRepository = new BookRepositoryBanco();

exports.getAllbooks = async(request, response)=>{
    try{
        const books = await bookRepository.getAll();
        response.status(200).json(books);
    }catch(error){
        response.status(400).json({
            message: error.message
        });
    }
};

exports.createBook = async(request, response)=>{
    try{
        const book = await bookRepository.create(request.body);
        response.status(200).json(book);
    }catch{
        response.status(400).json({
            message: error.message
        });
    }
};

exports.updateBook = async(request, response)=>{
    try{
        const book = await bookRepository.update(request.params.id, request.body);
        response.status(200).json(book);
    }catch(error){
        response.status(400).json({
            message: error.message
        });
    }
};

exports.deleteBook = async(request, response)=>{
    try{
        await bookRepository.delete(request.params.id);
        response.status(200).json({
            message: "Livro deletado com sucesso!!!"
        });
    }catch{
        response.status(400).json({
            message: error.message
        });
    }
};