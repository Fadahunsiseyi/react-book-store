import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ title: '', author: '' });
  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title.trim() && form.author.trim()) {
      const data = {
        id: Date.now(),
        title: form.title,
        author: form.author,
      };
      dispatch(addBook(data));
      setForm({ title: '', author: '' });
    }
  };
  return (
    <>
      <h1>ADD BOOK</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter book title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter book Author"
          name="author"
          value={form.author}
          onChange={handleChange}
        />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default AddForm;
