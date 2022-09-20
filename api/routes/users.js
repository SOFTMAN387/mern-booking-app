import express from "express";
import {
    deleteUsers,
    updateUsers,
    getByIdUsers,
    getAllUsers,
} from "../controllers/Users.js";

import { verifyToken, verifyAdmin, verifyfUser } from "../utils/VeryToken.js";

const router = express.Router();

// router.get("/checkauth", verifyToken, (req, res, next) => {
//     res.send("hello Your are logedIn..");
// });

// router.get("/checkauth/:id", verifyfUser, (req, res, next) => {
//     res.send("hello Your are logedIn and u can delete..");
//     next();
// });

// router.get("/", verifyAdmin, (req, res, next) => {
//     res.send(" Your are adMin and u can delete..");
//     next();
// });

//UPDATE BY ID HOTLEL Collections...
router.put("/:id", verifyfUser, updateUsers);

//DELETE BY ID HOTLEL Collections...
router.delete("/:id", verifyfUser, deleteUsers);

//GET BY ID HOTLEL Collections...
router.get("/:id", verifyfUser, getByIdUsers);

// //GET All HOTLEL Collections...
// router.get("/", verifyAdmin, getAllUsers);

//GET All HOTLEL Collections...
router.get("/", getAllUsers);

export default router;