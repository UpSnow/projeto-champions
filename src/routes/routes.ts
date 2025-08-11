import { Router } from "express";
import * as PlayerController from "../controllers/players-cotroller";

const router = Router()
router.get("/players",PlayerController.getPlayer);
router.post("/players", PlayerController.postPlayer);

router.get("/players/:id",PlayerController.getPlayerById);







export default router;
