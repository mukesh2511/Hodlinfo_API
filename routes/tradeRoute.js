import express from "express";
import { sendData } from "../controllers/tradeController.js";
import { getData } from "../controllers/tradeController.js";
const router = express.Router();

router.post("/", sendData);
router.get("/", getData);

export default router;
