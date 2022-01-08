let myLibrary = [];

const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const readOrNot = document.querySelector('.readOrNot');
const bookGrid = document.querySelector('.bookGrid');
const bookCard = document.querySelector('.bookCard');
const submitBtn = document.querySelector('.submitBtn');
const formContainer = document.querySelector('.formContainer');
const openForm = document.querySelector('.addBookBtn');
const closeForm = document.querySelector('.closeForm');
const resetBtn = document.querySelector('.resetBtn');


function Book(title, author, pages, readOrNot) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrNot = readOrNot;
}

function createBookCard() {
    let newBookCard = document.createElement('div');
    newBookCard.classList.add('bookCard');
    bookGrid.appendChild(newBookCard);
    
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn');
    removeBtn.innerHTML = 'Remove';
    newBookCard.appendChild(removeBtn);
    let removeBook = document.getElementsByClassName('removeBtn');
    for (let i = 0; i < removeBook.length; i++) {
        removeBook[i].addEventListener('click', function() {
            this.parentNode.remove();
        });
    };
    
    let currentBook = myLibrary[0];
    for (let k = 0; k < myLibrary.length; k++) {
        if (currentBook.readOrNot == 'yes') {
            let newBookInfo = document.createTextNode('Title: ' + currentBook.title + '. Author: ' + currentBook.author + '. Pages: ' + currentBook.pages + '. I have read this book.');
            newBookCard.appendChild(newBookInfo);
            return myLibrary;
        } else if (currentBook.readOrNot == 'no') {
            let newBookInfo = document.createTextNode('Title: ' + currentBook.title + '. Author: ' + currentBook.author + '. Pages: ' + currentBook.pages + '. I have NOT read this book.');
            newBookCard.appendChild(newBookInfo);
            return myLibrary;
        }
    }
}

function addToLibrary(book) {
    myLibrary.unshift(book);
    createBookCard();
}

submitBtn.addEventListener('click', () => {
    let newBook = new Book(title.value, author.value, pages.value, readOrNot.value);
    addToLibrary(newBook);
    resetBtn.click();
    formContainer.style.display = "none";
})

openForm.addEventListener('click', () => {
    formContainer.style.display = "block";
})

closeForm.addEventListener('click', () => {
    formContainer.style.display = "none";
})

const theHungerGames = new Book('the Hunger Games', 'Suzanne Collins', '374', 'yes');
addToLibrary(theHungerGames);

const toKillAMockingbird = new Book('To Kill a Mockingbird', 'Harper Lee', '284', 'yes');
addToLibrary(toKillAMockingbird);

const prideAndPrejudice = new Book('Pride and Prejudice', 'Jane Austenn', '384', 'no');
addToLibrary(prideAndPrejudice);
