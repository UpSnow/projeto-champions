import { Router } from "express";
import { getPlayer } from "./controllers/players-cotroller";

const router = Router()
router.get("/players",getPlayer)



export default router
