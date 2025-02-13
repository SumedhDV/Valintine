const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("database.json"); // ✅ Uses database.json
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
