const BookService = require("../services/BooksService");

const getAll = async (req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const books = await BookService.getById(id);
  if (!books) return res.status(404).json({ message: "Book not found" });

  res.status(200).json(books);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  if (!title || !author || !pageQuantity)
    return res.status(404).json({ message: "Campo faltando" });
  const newBook = await BookService.create({ title, author, pageQuantity });

  res.status(200).json(newBook);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const updatedBook = await BookService.update(id, {
    title,
    author,
    pageQuantity,
  });
  if (!updatedBook) return res.status(400).json({ message: "Book not found" });

  res.status(200).json({ message: "Book updated", book: updatedBook });
};

const remove = async (req, res) => {
  const { id } = req.params;
  const removed = await BookService.remove(id);

  res.status(200).json({ message: "Book deleted", data: removed });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
