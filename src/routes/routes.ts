import { Router } from "express";
import * as PlayerController from "../controllers/players-cotroller";
import * as ClubsController from "../controllers/clubs-controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Players
 *     description: Endpoints relacionados aos jogadores
 *   - name: Clubs
 *     description: Endpoints relacionados aos clubes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Player:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         name:
 *           type: string
 *         age:
 *           type: number
 *         position:
 *           type: string
 *         club:
 *           type: string
 *         statistics:
 *           type: object
 *       example:
 *         id: 1
 *         name: "Arthur"
 *         age: 23
 *         position: "Midfielder"
 *         club: "Real Madrid"
 *         statistics:
 *           goals: 10
 *           assists: 5
 *
 *     Club:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         name:
 *           type: string
 *       example:
 *         id: 1
 *         name: "Barcelona"
 */

/**
 * @swagger
 * /api/players:
 *   get:
 *     summary: Retorna todos os jogadores cadastrados
 *     tags: [Players]
 *     responses:
 *       200:
 *         description: Lista de jogadores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Player"
 */
router.get("/players", PlayerController.getPlayer);

/**
 * @swagger
 * /api/players:
 *   post:
 *     summary: Cria um novo jogador
 *     tags: [Players]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Player"
 *     responses:
 *       201:
 *         description: Jogador criado
 *       400:
 *         description: Dados inválidos
 */
router.post("/players", PlayerController.postPlayer);

/**
 * @swagger
 * /api/players/{id}:
 *   delete:
 *     summary: Remove um jogador pelo ID
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Jogador excluído
 *       404:
 *         description: Jogador não encontrado
 */
router.delete("/players/:id", PlayerController.deletePlayer);

/**
 * @swagger
 * /api/players/{id}:
 *   patch:
 *     summary: Atualiza parcialmente um jogador pelo ID
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Jogador atualizado
 *       404:
 *         description: Jogador não encontrado
 */
router.patch("/players/:id", PlayerController.updatePlayer);

/**
 * @swagger
 * /api/players/{id}:
 *   get:
 *     summary: Retorna um jogador pelo ID
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Jogador encontrado
 *       404:
 *         description: Jogador não encontrado
 */
router.get("/players/:id", PlayerController.getPlayerById);

/**
 * @swagger
 * /api/clubs:
 *   get:
 *     summary: Retorna todos os clubes cadastrados
 *     tags: [Clubs]
 *     responses:
 *       200:
 *         description: Lista de clubes cadastrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Club"
 */
router.get("/clubs", ClubsController.getclubs);

export default router;
