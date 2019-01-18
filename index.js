const http = require("http");
const db = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./db.sqlite"
  }
});

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  const url = req.url;
  if (url === "/") {
    const getUsers = await db.select().table("user");
    console.log(getUsers);
    res.end(JSON.stringify(getUsers));
  }
});

server.listen(3001, () => {
  console.log(`Server running`);
});
