const { Book } = require("../models");

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const books = await Book.findByPk(id);
  return books;
};

const create = async ({ title, author, pageQuantity }) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  return newBook;
};

module.exports = {
  getAll,
  getById,
  create,
};
