const BookController = require("./controllers/BookController");

const express = require("express");
const app = express();
const PORT = 4001;

app.use(express.json());

app.get("/books", BookController.getAll);

app.get("/books/:id", BookController.getById);

app.post("/books", BookController.create);

app.put("/books/:id", BookController.update);

app.delete("/books/:id", BookController.remove);

app.listen(PORT, () => console.log(`RODANDO APP EM: ${PORT}`));
