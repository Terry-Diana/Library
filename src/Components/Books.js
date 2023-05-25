import React from 'react';
import '../App.css';

const Books = () => {
  return (
    <section className="booklist">
      <div className="book">
        <img
          src="https://m.media-amazon.com/images/I/41WJKLNCQFL._SX322_BO1,204,203,200_.jpg"
          alt="The Tree of Knowledge"
        />
        <h2>The Tree of Knowledge</h2>
        <h4>Author: Daniel G. Miller</h4>
      </div>

      <div className="book">
        <img
          src="https://m.media-amazon.com/images/I/41GqzVpf6UL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          alt="The Book of Lost Names Paperback"
        />
        <h2>The Book of Lost Names</h2>
        <h4>Author: Kristin Harmel </h4>
      </div>

      <div className="book">
        <img
          src="https://m.media-amazon.com/images/I/41x4eg5KyGL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          alt="The Seven Husbands of Evelyn Hugo: A Novel Paperback"
        />
        <h2>The Seven Husbands of Evelyn Hugo: A Novel</h2>
        <h4>Author: Taylor Jenkins Reid </h4>
      </div>

      <div className="book">
        <img
          src="https://m.media-amazon.com/images/I/51w47ohIT9L._SX403_BO1,204,203,200_.jpg"
          alt="The Other Emily Paperback"
        />
        <h2>The Other Emily</h2>
        <h4>Author: Dean Koontz</h4>
      </div>
    </section>
  );
};

export default Books;
