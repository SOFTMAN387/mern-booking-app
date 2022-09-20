import Users from "../models/Users.js";

//Update Users
export const updateUsers = async(req, res, next) => {
    try {
        const updateUsers = await Users.findByIdAndUpdate(
            req.params.id, {
                $set: req.body,
            }, { new: true }
        );
        console.log(req.body);

        res.status(200).json(updateUsers);
        console.log(updateUsers);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Delete Users
export const deleteUsers = async(req, res, next) => {
    try {
        const delUsers = await Users.findByIdAndDelete(req.params.id);
        res.status(200).json(delUsers);
        console.log(delUsers);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Get Users by Id ....

export const getByIdUsers = async(req, res, next) => {
    try {
        const getByIdUsers = await Users.findById(req.params.id);
        res.status(200).json(getByIdUsers);
        console.log(getByIdUsers);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Get All Users...
export const getAllUsers = async(req, res, next) => {
    try {
        const getAlldUsers = await Users.find();
        res.status(200).json(getAlldUsers);
        console.log(getAlldUsers);
    } catch (error) {
        res.status(500).json(error);
    }
};