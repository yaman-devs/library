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

//  Validation /--
title.addEventListener("input", (event) => {
  const error = document.querySelector("#title + div.error");

  if (title.validity.valid) {
    error.textContent = "";
    error.className = "error";
  } else {
    showError(event.target, error);
  }
});

auther.addEventListener("input", (event) => {
  const error = document.querySelector("#auther + div.error");
  if (auther.validity.valid) {
    error.textContent = "";
    error.className = "error";
  } else {
    showError(event.target, error);
  }
});

function showError(e, error) {
  if (e.validity.valueMissing) {
    error.textContent = `You need to enter a/an ${e.id}.`;
  } else if (e.validity.typeMismatch) {
    error.textContent = `Entered value must be ${e.type}`;
  } else if (e.validity.tooShort) {
    error.textContent = `Title should be at least ${e.minLength} characters; you entered ${e.value.length}.`;
  }
  error.className = "error active";
}

const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  const titleError = document.querySelector("#title + div.error");
  const autherError = document.querySelector("#auther + div.error");
  const pagesError = document.querySelector("#pages + div.error ");

  if (!title.validity.valid) {
    showError(title, titleError);
    event.preventDefault();
  } else if (!auther.validity.valid) {
    showError(auther, autherError);
    event.preventDefault();
  } else if (!pages.validity.valid) {
    pagesError.textContent = "You need to enter pages number.";
    event.preventDefault();
  } else {
    titleError.textContent = "";
    autherError.textContent = "";
    pagesError.textContent = "";
    titleError.className = "error";
    autherError.className = "error";
    pagesError.className = "error";
    addBookToLibrary(title);
  }
});

// --/

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
