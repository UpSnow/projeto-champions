import express from "express";
import router from "./routes/routes";
import cors from "cors";
import { setupSwagger } from "./config/swagger";

function createApp() {
  const app = express();

  app.use(express.json());

  // CORS (use antes das rotas)
  const corsOptions = {
    origin: ["http://arthur.sistem.com", "http://gov.br"],
    methods: ["GET", "PATCH", "POST", "DELETE"],
  };
  app.use(cors(corsOptions));

  // Swagger
  setupSwagger(app);

  // Rotas da API
  app.use("/api", router);

  return app;
}

export default createApp;
