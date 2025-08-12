import { Router } from "express";
import * as PlayerController from "../controllers/players-cotroller";
import * as ClubsController from "../controllers/clubs-controller"

const router = Router()

//Players
router.get("/players",PlayerController.getPlayer);
router.post("/players", PlayerController.postPlayer);
router.delete("/players/:id",PlayerController.deletePlayer);
router.patch("/players/:id", PlayerController.updatePlayer)
router.get("/players/:id",PlayerController.getPlayerById);


//Clubs
router.get("/clubs", ClubsController.getclubs)


export default router;
