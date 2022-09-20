import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotels.js";
import roomRoute from "./routes/rooms.js";
import userRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors";
//import bodyParser from "body-parser";

const app = express();

const port = process.env.PORT || 8000;
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//app.use(bodyParser.urlencoded({ extended: false }));
const db = process.env.MONGODB_URL;

//Database Connection....
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("connection sucessful!!..");
    })
    .catch((error) => {
        console.log("Not connected");
        console.log(error);
    });

app.get("/", (req, res) => {
    res.send("hello from server");
});

//Middlewares....
app.use(express.json());

app.use((req, res, next) => {
    console.log("hi i'm middle ware");
    next();
});

app.use("/api/auth", authRoute);
app.use("/api/hotel", hotelRoute);
app.use("/api/room", roomRoute);
app.use("/api/user", userRoute);

//Creating Server Connections...
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});