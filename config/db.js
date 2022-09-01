import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });


mongoose.connect(process.env.URI)
.then(() => console.log("Base de datos conectada correctamente"))
.catch(() => console.error("fallo la wea"))