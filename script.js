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

    let readToggle = document.createElement('input');
    readToggle.classList.add('readToggle');
    readToggle.type = 'checkbox';
    readToggle.name = 'readCheck';
    newBookCard.appendChild(readToggle);
    
    Book.prototype.readBook = function() {
        readToggle.checked = true;
    }

    let bookT = document.createElement('div');
    bookT.classList.add('bookTitle')
    let bookA = document.createElement('div');
    bookA.classList.add('bookAuthor')
    let bookP = document.createElement('div');
    bookP.classList.add('bookPages')
    let bookR = document.createElement('div');
    bookR.classList.add('bookRead')
    bookR.textContent = 'Read:';

    let currentBook = myLibrary[0];

    for (let k = 0; k < myLibrary.length; k++) {
        bookT.textContent = 'Title: ' + currentBook.title;
        bookA.textContent = 'Author: ' + currentBook.author;
        bookP.textContent = 'Pages: ' + currentBook.pages;
        newBookCard.appendChild(bookT);
        newBookCard.appendChild(bookA);
        newBookCard.appendChild(bookP);
        newBookCard.appendChild(bookR);
        
        if (currentBook.readOrNot == 'yes') {
            currentBook.readBook();
        }
    }
}

function addToLibrary(book) {
    myLibrary.unshift(book);
    createBookCard();
}

submitBtn.addEventListener('click', () => {
    let newBook = new Book(title.value, author.value, pages.value, readOrNot.value);
    console.log(newBook);
    console.log(newBook.readOrNot);
    newBook.prototype = Object.create(Book.prototype);
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

//const theHungerGames = new Book('the Hunger Games', 'Suzanne Collins', '374', 'yes');
//addToLibrary(theHungerGames);

// const toKillAMockingbird = new Book('To Kill a Mockingbird', 'Harper Lee', '284', 'yes');
// addToLibrary(toKillAMockingbird);

//const prideAndPrejudice = new Book('Pride and Prejudice', 'Jane Austenn', '384', 'no');
//addToLibrary(prideAndPrejudice);