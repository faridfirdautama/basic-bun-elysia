import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/api/v1/users", () => "Hi Users")
  .get("/api/v1/products", () => "Hi Products")
  .listen(3000);

app.handle(new Request("http://localhost:3000/")).then(console.log());

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
