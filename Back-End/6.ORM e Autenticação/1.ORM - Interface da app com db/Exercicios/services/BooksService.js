const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.getAll();
  return books;
}

module.exports = {
  getAll,
}