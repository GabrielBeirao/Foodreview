import express from "express";
import Schedule from '../models/Schedule';
import Studio from '../models/Studio';
import User from "../models/User.js";

const schedule = express.Router();

schedule.get('/', (req, res) => {
    res.send('Rota de Schedules');
});

schedule.post("/register", async (req, res) => {

    const { idUser, idStudio, comment, stars } = req.body;

    const alreadyExistsSchedule = await Schedule.findOne({ where: { idUser, idStudio } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (alreadyExistsSchedule) {
        return res.status(409).json({ message: "Schedule already registered!" });
    }

    const newSchedule = new Studio({ idUser, idStudio, comment, stars });
    const savedSchedule = await newSchedule.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Sorry! Could not register the schedule" });
    });

    if (savedSchedule) res.json({ message: "New schedule Registered!" });
});

schedule.get('/findByStudio', async (req, res) => {
    const idStudio = req.query.idStudio;
    const schedule = await Schedule.findAll({
        where: {
            idStudio: idStudio
        },
        include: [{model: User}]
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (schedule) {
        return res.json({ schedule })
    } else {
        return null
    }
})

schedule.get('/findByUser', async (req, res) => {
    const idUser = req.query.idUser;
    const schedule = await Schedule.findAll({
        where: {
            idUser: idUser
        },
        include: [{model: Studio}]
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (schedule) {
        return res.json({ schedule })
    } else {
        return null
    }
})

export default schedule; 