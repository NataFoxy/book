const titleElement = document.getElementById('title');
const yearElement = document.getElementById('year');
const authorElement = document.getElementById('author');
const genreElement = document.getElementById('genre');
const imgElement = document.getElementById('book_img');

async function loadBook() {
  const response = await fetch(
    'https://alisherkhamidov.github.io/book-api/book.json'
  );
  const obj = await response.json();
  console.log(obj);
  const { title, author, year, genre, cover } = obj;
  titleElement.textContent = title;
  yearElement.textContent = year;
  authorElement.textContent = author;
  genreElement.textContent = genre;
  imgElement.src = cover;
}

loadBook();
