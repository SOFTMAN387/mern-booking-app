import express from "express";
import {
    getByIdRooms,
    updateRooms,
    deleteRooms,
    createRoom,
    updateRoomAbl,
    getAllRoomsData
} from "../controllers/rooms.js";
import { verifyToken, verifyAdmin, verifyfUser } from "../utils/VeryToken.js";
const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("hello from router rooms");
// });

router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE BY ID HOTLEL Collections...
router.put("/:id", verifyAdmin, updateRooms);

//UPDATE Room available room  BY ID ...
router.put("/availability/:id", verifyAdmin, updateRoomAbl);

//DELETE BY ID HOTLEL Collections...
router.delete("/:id/:hotelid", verifyAdmin, deleteRooms);

//GET BY ID HOTLEL Collections...
router.get("/:id", getByIdRooms);

//GET BY ID HOTLEL Collections...
router.get("/", getAllRoomsData);

export default router;