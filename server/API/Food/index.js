import express from "express";

//Database MOdel
import { FoodModel } from "../../database/allModels";

const Router = express.Router();


/*
Route     /
Descrip   Get all food based on particular restaurant
Params    _id
Access    Public
Method    GET
*/

Router.get("/:id", async (req, res) => {
    try {
        const { _id } = req.params;
        const foods = await FoodModel.find({ restaurant: _id });
        return res.json({ foods });

    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route     /r
Descrip   Get all the foods based on particular category
Params    category
Access    Public
Method    GET
*/

Router.get("/r/:category", async (req, res) => {
    try {
        const { category } = req.params;
        const foods = await FoodModel.find({
            category: { $regex: category, $options: "i" }
        });
    }
    catch (error){
        return res.status(500).json({ error: error.message });

    }
    
});


export default Router;