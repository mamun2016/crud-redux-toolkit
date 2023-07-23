import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./BooksSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title, author };
    dispatch(addBook(book));
    navigate("/show-books", { replace: true });
  };

  return (
    <div className="add-book">
      <h2>Add Books</h2>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-holder">
          <label className="input-label" htmlFor="title">
            Title
          </label>
          <input
            className="input-box"
            value={title}
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-holder">
          <label className="input-label" htmlFor="author">
            Author
          </label>
          <input
            className="input-box"
            value={author}
            type="text"
            name="author"
            id="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="form-holder">
          <button className="button" type="submit">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
