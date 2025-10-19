import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chatRoutes from "./routes/chat.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Rota de teste (GET)
app.get("/", (req, res) => {
  res.send("🚀 WR AI Toolkit está em execução!");
});

// Rota de IA
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));

