import Rooms from "../models/Rooms.js";
import Hotels from "../models/Hotels.js";

export const createRoom = async(req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Rooms(req.body);
    try {
        const saveRoom = await newRoom.save();
        try {
            await Hotels.findByIdAndUpdate(hotelId, {
                $push: { rooms: saveRoom._id },
            });
        } catch (error) {
            console.log(error);
        }
        res.status(200).json(saveRoom);
    } catch (error) {
        console.log(error);
    }
};

//Update Rooms
export const updateRooms = async(req, res, next) => {
    try {
        const updateRooms = await Rooms.findByIdAndUpdate(
            req.params.id, {
                $set: req.body,
            }, { new: true }
        );

        console.log(req.body);

        res.status(200).json(updateRooms);
        console.log(updateRooms);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Update Rooms
export const updateRoomAbl = async(req, res, next) => {
    try {
        await Rooms.updateOne({ "roomNumbers._id": req.params.id }, {
            $push: {
                "roomNumbers.$.unavailableDates": req.body.dates,
            },
        });
        res.status(200).json("Room status has been updated.");
    } catch (err) {
        next(err);
    }
};

//Delete Rooms
export const deleteRooms = async(req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
        const delRooms = await Rooms.findByIdAndDelete(req.params.id);
        res.status(200).json(delRooms);
        console.log(delRooms);
        try {
            await Hotels.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id },
            });
            res.status(200).json("room has been deleted..");
        } catch (error) {
            console.log(error);
        }
        res.status(200).json(saveRoom);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Get Rooms by Id ....

export const getByIdRooms = async(req, res, next) => {
    try {
        const getByIdRooms = await Rooms.findById(req.params.id);
        res.status(200).json(getByIdRooms);
        console.log(getByIdRooms);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Get All Rooms...
export const getAllRoomsData = async(req, res, next) => {
    try {
        const getAlldRooms = await Rooms.find();
        res.status(200).json(getAlldRooms);
        console.log(getAlldRooms);
    } catch (error) {
        res.status(500).json(error);
    }
};