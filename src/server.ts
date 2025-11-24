import createApp from "./app";

const app = createApp();
const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`🔥 Server running: http://localhost:${port}`);
  console.log(`📘 Swagger docs: http://localhost:${port}/api-docs`);
});
