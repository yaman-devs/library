let myLibrary = [];
const container = document.querySelector(".card-container");
const title = document.getElementById("title");
const auther = document.getElementById("auther");
const pages = document.getElementById("pages");
const haveRead = document.getElementById("read");

class book {
  constructor(title, auther, pages, haveRead) {
    this.title = title;
    this.auther = auther;
    this.pages = pages;
    this.haveRead = haveRead;
  }
}
function addBookToLibrary() {
  let checked = haveRead.checked ? true : false;
  if (myLibrary.some((e) => e.title === title.value))
    return alert("library has the same book");
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
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerText = "X";

  card.classList.add("card");
  card.dataset.index = myLibrary.length - 1;
  container.appendChild(card);
  card.appendChild(deleteButton);
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

  deleteButton.addEventListener("click", deleteBook);
  function deleteBook(e) {
    let obj = e.target.parentNode;
    myLibrary.splice(obj.dataset.index, 1);
    obj.parentNode.removeChild(obj);
  }
};
