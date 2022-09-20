import express from "express";
import {
    createHotel,
    deleteHotel,
    updateHotel,
    getByIdHotel,
    getAllHotel,
    countByCity,
    countByType,
    getHotelRooms,
    getAllHotelsData
} from "../controllers/hotels.js";

const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("hello from router hotels");
// });

//CREATE HOTLEL Collections...
router.post("/", createHotel);

//UPDATE BY ID HOTLEL Collections...
router.put("/:id", updateHotel);

//DELETE BY ID HOTLEL Collections...
router.delete("/:id", deleteHotel);

//GET BY ID HOTLEL Collections...
router.get("/find/:id", getByIdHotel);

//GET All HOTLEL Collections...
router.get("/", getAllHotel);


//GET All HOTLEL Collections...
router.get("/hotels", getAllHotelsData);

//GET All HOTLEL by City names Collections...
router.get("/countByCity", countByCity);

//GET All HOTLEL Collections...
router.get("/countByType", countByType);

//GET HOTEL_Rooms ById  ...
router.get("/room/:id", getHotelRooms);

export default router;