import Hotels from "../models/Hotels.js";
import Rooms from "../models/Rooms.js";

//Create Hotel
export const createHotel = async(req, res, next) => {
    try {
        const newHotel = new Hotels(req.body);
        console.log(req.body);
        const saveHote = await newHotel.save();
        res.status(200).json(saveHote);
        console.log(saveHote);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Update Hotel
export const updateHotel = async(req, res, next) => {
    try {
        const updateHotel = await Hotels.findByIdAndUpdate(
            req.params.id, {
                $set: req.body,
            }, { new: true }
        );
        console.log(req.body);

        res.status(200).json(updateHotel);
        console.log(updateHotel);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Delete Hotel
export const deleteHotel = async(req, res, next) => {
    try {
        const delHotel = await Hotels.findByIdAndDelete(req.params.id);
        res.status(200).json(delHotel);
        console.log(delHotel);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Get hotel by Id ....

export const getByIdHotel = async(req, res, next) => {
    try {
        const getByIdHotel = await Hotels.findById(req.params.id);
        res.status(200).json(getByIdHotel);
        console.log(getByIdHotel);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Get All Hotel. By filtering....
export const getAllHotel = async(req, res, next) => {
    const { min, max, ...ohters } = req.query;
    try {
        const getAlldHotel = await Hotels.find({
            ...ohters,
            cheapestPrice: { $gte: min || 0, $lte: max || 5000 },
        }).limit(req.query.limit);
        res.status(200).json(getAlldHotel);
        console.log(getAlldHotel);
    } catch (error) {
        res.status(500).json(error);
    }
};


//Get All Hotel...
export const getAllHotelsData = async(req, res, next) => {
    // const { min, max, ...ohters } = req.query;
    try {
        const getAlldHotel = await Hotels.find();
        res.status(200).json(getAlldHotel);
        console.log(getAlldHotel);
    } catch (error) {
        res.status(500).json(error);
    }
};




//Get All Hotel By City names...
export const countByCity = async(req, res, next) => {
    const cities = req.query.cities.split(",");
    console.log(cities);
    try {
        const cityHotelLists = await Promise.all(
            cities.map((city) => {
                return Hotels.countDocuments({ city: city });
            })
        );

        res.status(200).json(cityHotelLists);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Get All Hotel By types ...
export const countByType = async(req, res, next) => {
    try {
        const hotelCount = await Hotels.countDocuments({ type: "hotel" });
        const appartmentCount = await Hotels.countDocuments({ type: "appartment" });
        const resortCount = await Hotels.countDocuments({ type: "rersort" });
        const villaCount = await Hotels.countDocuments({ type: "villa" });
        const cabinCount = await Hotels.countDocuments({ type: "cabin" });

        res.status(200).json([{
                type: "hotel",
                count: hotelCount,
            },
            {
                type: "appartment",
                count: appartmentCount,
            },
            {
                type: "resort",
                count: resortCount,
            },
            {
                type: "villa",
                count: villaCount,
            },
            {
                type: "cabin",
                count: cabinCount,
            },
        ]);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getHotelRooms = async(req, res, next) => {
    try {
        const hotel = await Hotels.findById(req.params.id);
        const list = await Promise.all(
            hotel.rooms.map((room) => {
                return Rooms.findById(room);
            })
        );
        res.status(200).json(list);
    } catch (error) {
        console.log(error);
    }
};