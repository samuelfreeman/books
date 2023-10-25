// importing prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//  function for a greeting
const greeting = (req, res) => {
  res.send('Hello world Chippycode');
};

// function to add or save a book
const saveBook = async (req, res) => {
  try {
    const data = req.body;
    const book = await prisma.book.create({
      data,
    });
    res.status(201).json({
      book,
    });
  } catch (error) {
    console.log(error);
  }
};

// function for loading records of all books
const getList = async (req, res) => {
  try {
    const book = await prisma.book.findMany({});
    res.status(200).json({
      book,
    });
  } catch (error) {
    console.log(error);
  }
};

// function for updating a book
const update = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const book = await prisma.book.update({
      where: {
        id,
      },
      data,
    });
    res.status(201).json({
      book,
    });
  } catch (error) {
    console.log(error);
  }
};
// function for deleting books
const remove = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const book = await prisma.book.delete({
      where: {
        id,
      },
    });
    res.status(200).json({
      'record deleted': book,
    });
  } catch (error) {
    res.status(400).json({
      message: 'book not found',
    });
    console.log(error);
  }
};

// then we export all our functions
module.exports = {
  saveBook,
  getList,
  update,
  remove,
  greeting,
};
