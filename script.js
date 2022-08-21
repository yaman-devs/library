let myLibrary = [];
const container = document.querySelector(".card-container");

function book(auther, title, pages, haveRead) {
  this.auther = auther;
  this.title = title;
  this.pages = pages;
  this.haveRead = haveRead;
}
function addBookToLibrary() {
  let auther = prompt("what is the auther name?", "Unknown");
  let title = prompt("what is the title", "Unknown");
  let pages = prompt("how many pages does the book have?", "Unknown");
  let haveRead = prompt("have you read it?", false);
  let newBook = new book(auther, title, pages, haveRead);
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
  card.appendChild(title);
  auther.classList.add("auther");
  card.appendChild(auther);
  pages.classList.add("pages");
  card.appendChild(pages);
  label.classList.add("label-container");
  input.type = "checkbox";
  input.checked = newBook.haveRead;
  checkbox.classList.add("checkmark");
  label.appendChild(input);
  label.appendChild(checkbox);
  card.appendChild(label);
};
