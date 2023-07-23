import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BooksSlice";

const EditBook = () => {
  const location = useLocation();
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate("/show-books", { replace: true });
  };

  return (
    <div>
      <h2>Edit book</h2>

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
            Update Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
