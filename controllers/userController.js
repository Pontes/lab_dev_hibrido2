const UserRepositoryBanco = require('../repositories/userRepositoryBanco');
const userRepository = new UserRepositoryBanco();

exports.getAllusers = async(request, response)=>{
    try{
        const users =await userRepository.getAll();
        response.status(200).json(users);
    }catch(error){
        response.status(400).json({
            message: error.message
        });
    }
};

exports.createUser = async(request, response)=>{
    try{
        const user =await userRepository.create(request.body);
        response.status(200).json(users);
    }catch(error){
        response.status(400).json({
            message: error.message
        });
    }
};

exports.updateUser = async(request, response)=>{
    try{
        const user = await userRepository.update(request.params.id, request.body);
        response.status(200).json(user);
    }catch(error){
        response.status(400).json({
            message: error.message
        });
    }
};

exports.deleteUser = async(request, response)=>{
    try{
        await userRepository.delete(request.params.id);
        response.status(200).json({
            message: "Usuário deletado com sucesso!"
        });
    }catch(error){
        response.status(400).json({
            message: error.message
        });
    }
};


// const User = require('../models/user');
// exports.getAllusers = async(request, response) => {
//     try{
//         const users = await User.find();
//         response.status(200).json(users);
//     }catch(error){
//         response.status(400).json({message: error.message});
//     }
// };

// exports.createUser = async (request, response) => {
//     const user = new User(request.body);
//     try{
//         const savedUser = await user.save();
//         response.status(201).json(savedUser);
//     }catch(error){
//         response.status(400).json({ message: error.message});
//     }
// };

// exports.updateUser = async (request, response) => {
//     try{
//         const updateUser = await User.findByIdAndUpdate(request.params.id, request.body, {new: true})
//         response(200).json(updateUser);
//     }catch(error){
//         response.status(400).json({ message:error.message });
//     }
// };
// exports.deleteUser = async (request, response) => {
//     try{
//         await User.findByIdAndDelete(request.params.id);
//         response.status(200).json({message: "Usuário deletado com sucesso"});
//     }catch(error){
//         response.status(400).json({message: error.message});
//     }
// };

