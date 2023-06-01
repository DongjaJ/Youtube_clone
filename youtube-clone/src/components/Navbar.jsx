import React, { useEffect, useState } from 'react';
import { FaYoutube, FaSearch } from 'react-icons/fa';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { keyword } = useParams();
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setContent(keyword || '');
  }, [keyword]);

  function handleChange(e) {
    setContent(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`videos/${content}`);
  }

  return (
    <header className="flex w-full text-2xl p-4 border-b border-zinc-600 mb-4">
      <Link to="/" className="flex flex-none justify-center items-center mr-4">
        <FaYoutube className="text-4xl text-brand" />
        <h1 className="text-3xl font-bold ml-2">Youtube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex w-full justify-center items-center">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          value={content}
          className="w-7/12 p-2 bg-black outline-none"
        />
        <button className="bg-zinc-600 p-3">
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
