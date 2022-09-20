import Users from "../models/Users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async(req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(req.body.password, salt);
        const newUser = new Users({
            ...req.body,
            password: hashPass,
        });
        const createUser = await newUser.save();
        res.status(200).json(createUser);
    } catch (error) {
        console.log(error);
    }
};

export const login = async(req, res, next) => {
    try {
        const loginEmail = req.body.email;
        const loginPassword = req.body.password;

        const regEmail = await Users.find({ email: loginEmail });
        // console.log(regEmail);
        // console.log(regEmail[0]._id);
        if (regEmail) {
            const password = await bcrypt.compare(
                loginPassword,
                regEmail[0].password
            );
            if (password) {
                // res.status(200).json(regEmail);
                const token = jwt.sign({ id: regEmail._id, isAdmin: regEmail.isAdmin },
                    process.env.SECRET_KEY
                );

                res.cookie("userTokens", token, {
                    httpOnly: true,
                });

                res.cookie("userId", regEmail[0]._id, {
                    httpOnly: true,
                });

                // console.log(ID);
                // req.user = regEmail;
                // console.log(req.user);

                //  console.log(cookieValue);
                // console.log(req.cookies.userTokens);
                res.status(200).json(regEmail);
            } else {
                res.status(200).json(" OOps ! Invalid Credential...");
            }
        } else {
            res.status(200).json("OOps ! Invalid Credential...");
        }
    } catch (error) {
        console.log(error);
        res.status(200).json("User Not Found !!..");
    }
};