import jwt from "jsonwebtoken";
import Users from "../models/Users.js";
//import { getByIdUsers } from "../controllers/users.js";
export const verifyToken = async(req, res, next) => {
    try {
        const u_Token = req.cookies.userTokens;
        const u_Id = req.cookies.userId;
        // console.log(u_Id);
        // console.log(u_Token);
        const user_data = await Users.find({ _id: u_Id });
        // console.log(user_data);

        if (!u_Token) {
            res.send(401, "You are not authenticated..!");
        } else {
            jwt.verify(u_Token, process.env.SECRET_KEY, (err, user) => {
                if (err) {
                    return res.send("Invalid Token ID..");
                } else {
                    req.user = user;
                    req.userData = user_data[0];
                    //console.log(token);
                    console.log(req.userData.isAdmin);
                    next();
                }
            });
            // req.user = getByIdUsers;
        }
    } catch (error) {
        console.log(error);
    }
};

export const verifyfUser = async(req, res, next) => {
    try {
        verifyToken(req, res, next, () => {
            if (req.userData._id === req.params.id || req.userData.isAdmin) {
                next();
            } else {
                res.send("Your are not Admin !..");
                console.log("Your are not Admin !..");
            }
        });
    } catch (error) {
        console.log(error);
    }
};
export const verifyAdmin = async(req, res, next) => {
    try {
        verifyToken(req, res, next, () => {
            if (req.user.isAdmin) {
                next();
            } else {
                return res.send("Your are not Authorized !..");
            }
        });
    } catch (error) {
        console.log(error);
    }
};