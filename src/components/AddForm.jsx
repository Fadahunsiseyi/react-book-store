import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import '../styles/AddForm.css';

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
        item_id: Date.now(),
        title: form.title,
        author: form.author,
        category: '',
      };
      dispatch(addBook(data));
      setForm({ title: '', author: '' });
    }
  };
  return (
    <div className="add-book">
      <h1>ADD BOOK</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter book title"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Enter book Author"
          name="author"
          value={form.author}
          onChange={handleChange}
          required
        />
        <label htmlFor="category-select">
          <select
            onChange={handleChange}
            id="category-select"
            name="category"
            value={form.category}
            required
          >
            <option disabled> Book </option>
            <option value="mathematics"> Mathematics </option>
            <option value="physics"> Physics </option>
            <option value="chemistry"> Chemistry </option>
            <option value="english"> English </option>
          </select>
        </label>
        <button type="submit" className="add-btn">Add Book</button>
      </form>
    </div>
  );
};

export default AddForm;
