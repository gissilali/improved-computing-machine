import styles from "../styles/Home.module.css";
import env from "../.env.js";
import { useState, useEffect } from "react";

const baseUrl = env.API_BACKEND_URL;

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(baseUrl + "/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className={styles.container}>
     <div className="card card-bordered card-preview">
        <div className="card-header">
          <h3 className="card-title">Books</h3>
        </div>
        <table className="table table-tranx">
          <thead>
          <tr className="tb-tnx-item">
              <th>ISBN #</th>
              <th>Title</th>
              <th>Author</th>
              <th>Release Date</th>
              <th>Character Count</th>
            </tr>
          </thead>
          <tbody>
          {books.map((book) => (
            <tr key={book.isbn} className="tb-tnx-item">
              <td>{book.isbn}</td>
              <td>{book.authors[0]}</td>
              <td>{book.release_date}</td>
              <td>{book.name}</td>
              <td>
                {book.character_count} <a href={`/characters/${book.isbn}`}>(view all)</a>
              </td>

            </tr>
          ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
