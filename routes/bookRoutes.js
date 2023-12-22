const express = require("express");
const { books, users, comments } = require("../config/db.js");
const { v4: uuidv4 } = require("uuid");

// Generate a new unique ID

const bookRoutes = express.Router();

// Task 1: Get the book list available in the shop.- 2 Points
bookRoutes.get("/", (req, res) => {
  res.send(books);
});

bookRoutes.post("/", (req, res) => {
  const { title, author_name, ISBN } = req.body;
  const id = uuidv4();
  const newBook = { id, title, author_name, ISBN };
  books.push(newBook);
  res.send(books);
});

// Task 2: Get the books based on ISBN.- 2 Points
// Task 3: Get all books by Author. -2 Points
// Task 4: Get all books based on Title - 2 Points
bookRoutes.post("/filter", (req, res) => {
  const filterBooks = [];
  const { title, author_name, ISBN } = req.body;
  books.map((item) => {
    (item.ISBN == ISBN ||
      item.author_name == author_name ||
      item.title == title) &&
      filterBooks.push(item);
  });
  res.send(filterBooks);
});

// Task 5: Get book Review. - 2 Points
bookRoutes.get("/comments", (req, res) => {
  const { bookId } = req.query;
  const foundComments = comments.filter((item) => item.bookId == bookId);
  res.send(foundComments || []);
});

// Task 8: Add a book review. - 2 Points
bookRoutes.post("/comment", (req, res) => {
  const { comment, bookId, username } = req.body;
  const id = uuidv4();
  const date = new Date().toString();
  const newComment = { id, comment, bookId, username, date };
  comments.push(newComment);
  res.send(comments.filter((item) => item.bookId == bookId) || []);
});

// Task 8: Modify a book review. - 2 Points
bookRoutes.patch("/comment", (req, res) => {
  const { id, comment, bookId } = req.body;
  comments.filter(
    (item) =>
      item.id == id &&
      ((item.comment = comment), (item.date = new Date().toString()))
  );
  res.send(comments.filter((item) => item.bookId == bookId) || []);
});

// Task 9: Delete book review added by that particular user - 2 Points
bookRoutes.delete("/comment", (req, res) => {
  const { id, bookId } = req.body;
  foundCommentInd = comments.findIndex((item) => item.id == id) + 1;
  if (foundCommentInd) {
    comments.splice(foundCommentInd - 1, 1);
    res.send({
      status: "success",
      message: "comment delete Suceess",
      comments: comments.filter((item) => item.bookId == bookId) || [],
    });
  } else {
    res.send({
      status: "error",
      message: "comment doesnt Exist",
      comments: comments.filter((item) => item.bookId == bookId) || [],
    });
  }
});

module.exports = bookRoutes;
