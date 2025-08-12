import express from "express"
import router from "./routes/routes";
import cors from "cors";
function createApp(){
    const app = express();


    app.use(express.json());
    app.use("/api",router)


    const corsOptions ={
        origin:["http://arthur.sistem.com", "http://gov.br"],
        methods:["GET","UPDATE"]
    }
    app.use(cors())

    return app

}

export default createApp
