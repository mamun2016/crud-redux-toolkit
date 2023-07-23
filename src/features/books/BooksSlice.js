import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  books: [
    { id: uuidv4(), title: "My BD", author: "Mamun" },
    { id: uuidv4(), title: "Extra ordinary", author: "Arif" },
    { id: uuidv4(), title: "The wolf", author: "Noman" },
  ],
};

export const BooksSlice = createSlice({
  name: "bookStore",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === id);

      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  BooksSlice.actions;

export default BooksSlice.reducer;
