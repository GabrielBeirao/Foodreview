import connection from "./config/db.js";
import User from "./models/User.js";
import Studio from "./models/Studio.js";
import Schedule from "./models/Schedule.js";

const migrate = async () => {
    try {
       const result = await connection.sync();
       console.log(result);
    } catch (error) {
        console.log(error);
    }
}

migrate();