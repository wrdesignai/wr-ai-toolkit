import express from "express";
import { generateResponse } from "../services/openaiService.js";

const router = express.Router();

// POST /api/chat
router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "O campo 'prompt' é obrigatório." });
    }

    const response = await generateResponse(prompt);
    res.json({ result: response });
  } catch (error) {
    console.error("Erro ao gerar resposta:", error);
    res.status(500).json({ error: "Erro interno ao processar a solicitação." });
  }
});

export default router;
