// import * as express from "express";
const books = [
  {
    id: 1,
    title: "The Lord of the Rings",
    author_name: "J.R.R. Tolkien",
    ISBN: "0618640150",
  },
];

const comments = [
  {
    id: 2,
    comment: "One of the best books ever!",
    bookId: 1,
    username: "admin",
    date: "2019-01-01",
  },
  {
    id: 3,
    comment: "I didn't like it that much.",
    bookId: 1,
    username: "sai",
    date: "2019-01-02",
  },
];

const users = [
  {
    id: 4,
    username: "admin",
    password: "admin",
    admin: true,
  },
  {
    id: 5,
    username: "sai",
    password: "sai",
    admin: false,
  },
];

module.exports = { books, users, comments };
