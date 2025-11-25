import createApp from "./app";
import main from "./data/database";

const app = createApp();
const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`🔥 Server running: http://localhost:${port}`);
  console.log(`📘 Swagger docs: http://localhost:${port}/api-docs`);
  main();
});
