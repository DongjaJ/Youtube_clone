import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaSearch } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

export default function Navbar() {
  const { keyword } = useParams();
  const [content, setContent] = useState(keyword);

  useEffect(() => {
    setContent(keyword);
  }, [keyword]);

  function handleChange(e) {
    setContent(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex justify-between w-8/12 text-4xl border-b border-black">
      <Link to="/" className="flex flex-none justify-center items-center mr-4">
        <FaYoutube className="text-red-700" />
        <h1 className="text-white font-bold">Youtube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex flex-auto justify-center items-center">
        <input
          type="text"
          placeholder="search..."
          onChange={handleChange}
          value={content || ''}
          className="basis-full bg-black text-white outline-none"
        />
        <Link to={`/videos/${content}`} className="flex items-center">
          <button className="flex-none">
            <FaSearch className="text-white bg-gray-500" />
          </button>
        </Link>
      </form>
    </div>
  );
}
