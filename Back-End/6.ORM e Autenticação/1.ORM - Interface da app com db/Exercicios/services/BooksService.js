const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
}

const getById = async (id) => {
  const books = await Book.findByPk(id);
  return books;
}

module.exports = {
  getAll,
  getById,
}