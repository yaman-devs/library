let myLibrary = [];
const container = document.querySelector(".card-container");
const title = document.getElementById("title");
const auther = document.getElementById("auther");
const pages = document.getElementById("pages");
const haveRead = document.getElementById("read");

function book(auther, title, pages, haveRead) {
  this.title = title;
  this.auther = auther;
  this.pages = pages;
  this.haveRead = haveRead;
}
function addBookToLibrary() {
  let checked = haveRead.checked ? true : false;
  let newBook = new book(title.value, auther.value, pages.value, checked);
  myLibrary.push(newBook);
  display(newBook);
}

let display = (newBook) => {
  const card = document.createElement("div");
  const title = document.createElement("div");
  const auther = document.createElement("div");
  const pages = document.createElement("div");
  const label = document.createElement("label");
  const checkbox = document.createElement("span");
  const input = document.createElement("input");

  card.classList.add("card");
  container.appendChild(card);
  title.classList.add("title");
  title.innerText = newBook.title;
  card.appendChild(title);
  auther.classList.add("auther");
  card.appendChild(auther);
  auther.innerText = newBook.auther;
  pages.classList.add("pages");
  card.appendChild(pages);
  pages.innerText = newBook.pages;
  label.classList.add("label-container");
  input.type = "checkbox";
  input.checked = newBook.haveRead;
  checkbox.classList.add("checkmark");
  label.appendChild(input);
  label.appendChild(checkbox);
  card.appendChild(label);
};
