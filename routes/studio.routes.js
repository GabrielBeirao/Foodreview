import express from "express";
import Studio from "../models/Studio";


const studio = express.Router();

studio.get('/', (req, res) => {
    res.send('Rota de Studios');
});

studio.post("/register", async (req, res) => {
    
    const { name, type, description, address } = req.body;

    const alreadyExistsStudio = await Studio.findOne({ where: { name } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (alreadyExistsStudio) {
        return res.status(409).json({ message: "Studio already registered!" });
    }

    const newStudio = new Studio({ name, type, description, address });
    const savedStudio = await newStudio.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Sorry! Could not register the studio" });
    });

    if (savedStudio) res.json({ message: "New Studio Registered!" });
});

studio.get('/find', async (req, res) => {
    const studios = await Studio.findAll().catch(
        (err) => {
            console.log(err)
        }
    );

    if (studios){
        return res.json({studios})
    } else {
        return null
    }
})

export default studio;