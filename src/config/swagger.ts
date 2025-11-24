import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

export function setupSwagger(app: Express) {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Players & Clubs API",
        version: "1.0.0",
        description: "Documentação interativa da API utilizando Swagger",
      },
    },
    apis: ["./src/routes/*.ts"], // aqui ele busca as rotas e comentários
  };

  const swaggerSpec = swaggerJsdoc(options);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
